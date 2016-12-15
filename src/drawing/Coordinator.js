/**
 * Represents a canvas on the server-side.  Might also be thought of as a "room"
 */
var Enum = require('../utils/Enum');


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

var COORDINATOR_EV = Enum(
	'USER_JOIN',
	'USER_PART',
	'STROKE_ADD',
	'CLEAR_CANVAS',
	'PUBLISH_HANDLES',
	'CONSUME_HANDLES',
	'CONSTRUCT',
	'DESTRUCT'
);

module.exports.prototype = 
{
	E : COORDINATOR_EV,
}
