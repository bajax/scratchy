/**
 * Represents the presence of a user in a room.  Talks directly to a websocket 
 * for the individual user.
 */
const EVENTS = require('../../shared/EventTypes').PRESENCE;

module.exports = function Presence (params, c)
{
	const self = this;
	
	var x;
	var y;
	var user;
	var destructed = false;

	var events = 
	[
		[c.E.CLEAR_CANVAS, cancel],
		[c.E.DESTRUCT,     cancel],
	];

	var tool =
	{
		size  : 2, //assuming standard, pre-hidpi pixels
		color : [0,0,0,1],
		shape : 0, //0 will correspond to ROUND, I think.
	};

	/**
	 * Begins a stroke at the current vertex, hopefully with position and 
	 * pressure info.
	 */
	function startStroke(initial_vert)
	{

	}

	/**
	 * Register all events.
	 */
	function allOn()
	{
		events.forEach(event => c.on(event[0], event[1]));
	}

	/**
	 * Unregister all events.
	 */
	function allOff()
	{
		events.forEach(event => c.on(event[0], event[1]));
	}

	Object.defineProperty(self, 'x',          { get:()=>x          });
	Object.defineProperty(self, 'y',          { get:()=>y          });
	Object.defineProperty(self, 'user',       { get:()=>user       });
	Object.defineProperty(self, 'destructed', { get:()=>destructed });

}

module.exports.prototype = 
{
	E : EVENTS,
}
