#!/usr/bin/env node
'use strict';
module.exports = function server(config)
{
	var debug       = require('debug')('scratchy:server');
	var reload      = require('reload');
	var http        = require('http');
	var express     = require('express');
	var app         = express();
	var routes      = require('./routes.js')(config);
	var body_parser = require('body-parser');

	app.set('views', config.dirs.views);
	app.set('view engine', 'pug');

	app.use(require('morgan')('dev'));

	app.use(body_parser.json());
	app.use(body_parser.urlencoded({ extended: false }));

	app.use(require('cookie-parser')());
	if (config.env === 'development')
	{
		app.use('/css', require('node-sass-middleware')(
		{
			src            : config.dirs.sass,
			dest           : config.dirs.css,
			root           : config.dirs.root,
			indentedSyntax : true,
			sourceMap      : true,
		}));
		app.use('/js', require('browserify-middleware')('./client', 
			{
				transform:
				[
					'browserify-shader', 
					['babelify', {presets: ['es2015',]} ], 
				],
			}));
	}

	app.use(express.static(config.dirs.media));
	app.use(express.static(config.dirs.static));
	app.use(express.static(__dirname + '/../bower_components/'));

	app.use('/', routes(express.Router({strict: true})));

	app.use((req, res, next) =>
	{
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	//stacktrace or not?
	switch (config.env)
	{
		case 'development':
			app.use((err, req, res, next) =>
			{
				res.status(err.status || 500);
				res.render('error', 
				{
					message : err.message,
					error   : err
				});
			});
			break;
		case 'deployment':
		default:
			app.use((err, req, res, next) =>
			{
				res.status(err.status || 500);
				res.render('error', 
				{
					message : err.message,
					error   : {}
				});
			});
			break;
	}

	var port = parseInt(config.listen, 10) || config.listen;

	app.set('port', port);

	var server = http.createServer(app);

	if (config.env === 'development') 
		reload(server, app);

	server.listen(port);

	server.on('error', function on_error (error)
	{
		if (error.syscall !== 'listen')
			throw error;
	 
		var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

		// handle specific listen errors with friendly messages
		switch (error.code) 
		{
			case 'EACCES':
				console.error(bind + ' requires elevated privileges');
				process.exit(1);
				break;
			case 'EADDRINUSE':
				console.error(bind + ' is already in use');
				process.exit(1);

				break;
			default:
				throw error;
		}
	});

	server.on('listening', function on_listening () 
	{
		var addr = server.address();
		var bind = typeof addr === 'string'
			? 'pipe ' + addr
			: 'port ' + addr.port;
		debug('Listening on ' + bind);
	});
	return server;

	var io = require('socket.io')(server);
}
