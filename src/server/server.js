#!/usr/bin/env node
'use strict';
module.exports = function server(config)
{
	const debug       = require('debug')('scratchy:server');
	const reload      = require('reload');
	const http        = require('http');
	const express     = require('express');
	const app         = express();
	const io          = require('socket.io');
	const body_parser = require('body-parser');

	const routes      = require('./routes.js')(config);
	const sockets     = require('./sockets.js')(config);


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
		app.use('/js', require('browserify-middleware')('./src/client/', 
			{
				transform:
				[
					'browserify-shader', 
					['babelify', {presets: ['es2015',]} ], 
				],
			}));
	}

	if (config.env === 'development')
		app.use(express.static(config.dirs.volatile));
	if (config.env === 'development')
		app.use(express.static(config.dirs.static));

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
	
	sockets(io(server));

	return server;


}
