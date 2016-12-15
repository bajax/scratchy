/**
 * Represents a canvas on the server-side.  Might also be thought of as a "room"
 */

module.exports = function Canvas (params, coordinator)
{
	var self = this;

	var clear_delay = params.clear_delay || 300;

	var users       = [];
	var strokes     = [];

	function receiveStroke (stroke)
	{
		strokes.push(stroke);
		coordinator.emit('STROKE');
	}

	function clear ()
	{
		strokes = [];
		coordinator.emit('CLEAR');
	}
}
