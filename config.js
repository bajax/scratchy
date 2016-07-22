'use strict';
var path = require('path');

module.exports = 
{
	development :
	{
		env         : 'development',
		listen      : 3000,
		mongodb     : 
		{
			host : 'alfe.local',
			port : 27017,
			data : 'scratchy',
		},
		dirs :
		{
			static : path.join(__dirname, 'static'),
			media  : path.join(__dirname, 'media'),
			views  : path.join(__dirname, 'views'),
			sass   : path.join(__dirname, 'client/sass'),
			css    : path.join(__dirname, 'media/css'),
		}
	},
	deployment :
	{
		env         : 'deployment',
		listen      : '/var/run/scratchy-nodejs.sock',
		mongodb     : 
		{
			host : '127.0.0.1',
			port : 27017,
			data : 'scratchy',
		},
		dirs :
		{
			static : path.join(__dirname, 'res/static'),
			media  : path.join(__dirname, 'res/media'),
			views  : path.join(__dirname, 'res/views'),
			sass   : path.join(__dirname, 'client/sass'),
			css    : path.join(__dirname, 'media/css'),
		}
	},
}
