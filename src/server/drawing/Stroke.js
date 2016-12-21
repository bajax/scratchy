const EventEmitter = require('events');
/**
 * Represents a stroke that must be transported by the server between all the clients.
 */
module.exports = function Stroke (params, p, c)
{
	const self = this;

	var vertices = params.init_vert ? [params.init_vert] : [];
	var tool     = params.tool || {};
	var complete = false;

	/**
	 * Define all of this object's events in one place, to avoid future bugs 
	 * eg forgetting to unregister them.
	 * 0 = which emitter receives the event
	 * 1 = the event's ID
	 * 2 = the function to run
	 */
	var events = 
	[
		[c, c.E.CLEAR_CANVAS, cancel,        ],
		[c, c.E.DESTRUCT,     cancel,        ],
		[p, p.E.PEN_MOVE,     receiveVertex, ],
		[p, p.E.PEN_UP,       finish,        ],
		[p, p.E.PEN_CANCEL,   cancel,        ],
		[p, p.E.TOOL_CHANGE,  cancel,        ],
		[p, p.E.LEAVE,        cancel,        ],
	];

	/**
	 * Receive a new vertex and add it to your list.
	 */ 
	function receiveVertex(vertex)
	{
		if (!complete)
			vertices.push(vertex);
		else
			throw new Error('client still emitting vertices after stroke completion.');
	}

	/**
	 * Stop capturing vertices and discard the stroke.
	 */
	function cancel(e)
	{
		complete = true;
		allOff();
	}

	/**
	 * Stop capturing vertices and saves the stroke.
	 */
	function finish(e)
	{
		complete = true;
		allOff();
		c.emit(c.E.STROKE_ADD, {tool:tool, vertices:vertices});
	}

	/**
	 * Register all events.
	 */
	function allOn()
	{
		events.forEach(event => event[0].on(event[1], event[2]));
	}

	/**
	 * Unregister all events.
	 */
	function allOff()
	{	
		events.forEach(event => event[0].off(event[1], event[2]));
	}

	Object.defineProperty(self, 'vertices', { get:()=>vertices });
	Object.defineProperty(self, 'tool',     { get:()=>tool     });
	Object.defineProperty(self, 'complete', { get:()=>complete });

	allOn();
}
