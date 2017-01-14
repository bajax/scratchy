'use strict';
var path = require('path');

module.exports = 
{
	development :
	{
		env     : 'development',
		listen  : 3000,
		mongodb : 
		{
			host : 'alfe.local',
			port : 27017,
			data : 'scratchy',
		},
		dirs :
		{
			static   : path.join(__dirname, '../res/static'),
			volatile : path.join(__dirname, '../res/volatile'),
			views    : path.join(__dirname, '../res/views'),
			sass     : path.join(__dirname, '../res/static/sass'),
			css      : path.join(__dirname, '../res/volatile/css'),
		},
	},
	deployment :
	{
		env     : 'deployment',
		listen  : '/var/run/scratchy-nodejs.sock',
		mongodb : 
		{
			host : '127.0.0.1',
			port : 27017,
			data : 'scratchy',
		},
		dirs :
		{
			static   : path.join(__dirname, '../res/static'),
			volatile : path.join(__dirname, '../res/volatile'),
			views    : path.join(__dirname, '../res/views'),
			sass     : path.join(__dirname, '../res/static/sass'),
			css      : path.join(__dirname, '../res/volatile/css'),
		},
	},
}
