'use strict';
var express      = require('express');
//var favicon      = require('serve-favicon');

function app_init (config)
{
	var app = express();
	var routes = require('./routes.js')(config);

	app.set('views', config.dirs.views);
	app.set('view engine', 'pug');

	app.use(require('morgan')('dev'));

	var body_parser = require('body-parser');
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
		app.use('/js', require('browserify-middleware')('./client', {transform:'browserify-shader'}));
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

	return app;
}
module.exports = app_init;
