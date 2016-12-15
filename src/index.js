//Just the entry-point for the app.  Only does this right now.
require('./server')(require('../config')[process.env.deployment_level || 'development']);
