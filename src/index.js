#!/usr/bin/env node

//Set NODE_PATH to avoid having to do a bunch of relative imports
process.env.NODE_PATH = __dirname;

function filter_params(param, index, array)
{
	if (index < 2)
		return false;
	if (param[0] === '-')
		return false;
	return true;
}

switch (process.argv.filter(filter_params)[0])
{
	case undefined:
	case 'debug':
	case 'runserver':
		require('server/server')(require('config')[process.env.deployment_level || 'development']).run();
		if (process.argv.includes('-b'))
		{
			//include the browser runner and start the server's URL
		}
		break;
	case 'test':
		process.exit()
		break;
	default:
		console.log(`unknown option: '${process.argv[2]}'`)
		break
}

