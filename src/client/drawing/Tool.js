const TOOLS = require('../../shared/ToolDefs').TOOLS;
/**
 * Represents a client-side tool definition.
 */
module.exports = function Tool (params, p, t)
{
	const self = this;

	var name           = params.name           || 'Binary';
	var active         = params.active         || false;
	var tool           = params.tool           || TOOLS.BINARY;
	var size           = params.size           || 2;
	var color          = params.color          || [1,1,1,1];
	var pscale_size    = params.pscale_size    || 1.0;
	var pscale_opacity = params.pscale_opacity || 1.0;

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
	 * Update self from the GUI on every change, then report the change to presence
	 */
	function handleGUIEvent()
	{
		//TODO: Figure out how to render Jade templates on the client side
	}

	/**
	 * Relays tool definition whenever requested.
	 */
	function relayDef (only_active)
	{
		if (!only_active || active)
			p.emit(p.E.TOOL_CHANGE, self);
	}

	function handleDelete(only_active)
	{
		if (!only_active || active)
			allOff();
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

	Object.defineProperty(self, 'brush',          { get:()=>brush          });
	Object.defineProperty(self, 'name',           { get:()=>name           });
	Object.defineProperty(self, 'size',           { get:()=>size           });
	Object.defineProperty(self, 'color',          { get:()=>color          });
	Object.defineProperty(self, 'pscale_size',    { get:()=>pscale_size    });
	Object.defineProperty(self, 'pscale_opacity', { get:()=>pscale_opacity });

}
