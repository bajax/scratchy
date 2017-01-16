/**
 * Represents a canvas on the server-side.  Might also be thought of as a "room"
 */
const EVENTS = require('shared/event_types').COORDINATOR;


module.exports = function Coordinator (params, dispatcher)
{
	var self        = this;
	var clear_delay = params.clear_delay || 300;
	var users       = [];
	var strokes     = [];
	var destructed  = false;

	function receiveStroke (e)
	{
		strokes.push(e.stroke);
	}

	function clear ()
	{
		strokes = [];
		self.emit('CLEAR_CANVAS');
	}

}

module.exports.prototype = 
{
	E : EVENTS,
}
