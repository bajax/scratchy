/**
 * Represents the presence of a user in a room.  Talks directly to a websocket 
 * for the individual user.
 */
const E = require('../../shared/event_types').PRESENCE;

module.exports = function Presence (params)
{
	if (new.target !== Presence)
		return new Presence(params);
	const self = this;
	
	let connected = false;
	Object.defineProperty(self, 'connected', { get:()=>connected });

}

module.exports.prototype = 
{
	E : E,
}
