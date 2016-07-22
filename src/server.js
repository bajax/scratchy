#!/usr/bin/env node
'use strict';
var debug = require('debug')('scratchy:server');
var reload = require('reload');

var http  = require('http');

var config = require('../config')[process.env.deployment_level || 'development'];
var app    = require('./app')(config);

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

