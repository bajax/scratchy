/**
 * Represents the presence of a user in a room.  Talks directly to a websocket 
 * for the individual user.
 */
const EVENTS = require('../../shared/event_types').PRESENCE;

module.exports = function Presence (params, c)
{
	const self = this;
	
	var connected = false;

	Object.defineProperty(self, 'connected', { get:()=>connected });

}

module.exports.prototype = 
{
	E : EVENTS,
}
