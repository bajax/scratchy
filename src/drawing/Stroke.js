/**
 * Represents a stroke that must be transported by the server.
 * It is a complete stroke-- incomplete strokes are handled differently.
 * Incomplete strokes are an extension that will have to be set up later most likely.
 */

module.exports = function Stroke (params, p, c)
{
	var self = this;

	var vertices = [];
	var tool     = params.tool;
	var complete = false;

	function receiveVertex(e)
	{
		if (!complete)
			vertices.push([e.x,e.y,e.p,e.t,e.r]);
		else
			throw new Error('client still emitting vertices after stroke completion.');
	}

	function cancel(e)
	{
		complete = true;
		p.removeAll(self); //almost pseudocode for now TODO: make real
		c.removeAll(self);
	}

	function finish(e)
	{
		complete = true;
		p.removeAll(self);
		c.removeAll(self);
		c.emit(c.E.STROKE_ADD, {tool:tool,vertices:vertices});
	}

	p.on(p.E.PEN_MOVE,     receiveVertex);
	p.on(p.E.PEN_UP,       finish);
	p.on(p.E.PEN_CANCEL,   cancel);
	p.on(p.E.TOOL_CHANGE,  cancel);
	p.on(p.E.LEAVE,        cancel);
	c.on(c.E.CLEAR_CANVAS, cancel);
	c.on(c.E.DESTRUCT,     cancel);
}
