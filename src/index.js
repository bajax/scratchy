//Set NODE_PATH to avoid having to do a bunch of relative imports
process.env.NODE_PATH = __dirname;

//Just the entry-point for the app
const config = require('config');

require('server/server')(config[process.env.deployment_level || 'development']);
