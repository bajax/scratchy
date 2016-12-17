/**
 * Represents the presence of a user in a room.  Talks directly to a websocket 
 * for the individual user.
 */
const E = require('../../shared/EventTypes').PRESENCE;

module.exports = function Presence (params, c, s)
{
	const self = this;
	
	var x;
	var y;
	var user;
	var destructed = false;
	/**
	 * Define all of this object's events in one place, to avoid future bugs 
	 * eg forgetting to unregister them.
	 * 0 = which emitter receives the event
	 * 1 = the event's ID
	 * 2 = the function to run
	 */
	var events = 
	[
		[c, c.E.JOIN,         (...args) => s.emit(E.JOIN, ...args),         ],
		[c, c.E.PART,         (...args) => s.emit(E.PART, ...args),         ],
		[c, c.E.CLEAR_CANVAS, onClearCanvas,                                ],
		[c, c.E.DESTRUCT,     (...args) => s.emit(E.KICK, ...args)          ],
		[s, E.PEN_DOWN,       startStroke                                   ],
		[s, E.PEN_MOVE,       (...args) => emit(E.PEN_MOVE, ...args),       ],
		[s, E.PEN_UP,         (...args) => emit(E.PEN_UP, ...args),         ],
		[s, E.PEN_CANCEL,     (...args) => emit(E.PEN_CANCEL, ...args),     ],
		[s, E.REPOSITION,     relayPosition                                 ],
		[s, E.TOOL_CHANGE,    changeTool                                    ],
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
	 * Relays position information.
	 */
	function relayPosition (_x, _y)
	{
		x = _x;
		y = _y;
	}

	/**
	 * Changes the current tooldef
	 */
	function changeTool ()
	{
		
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

	Object.defineProperty(self, 'x',          { get:()=>x          });
	Object.defineProperty(self, 'y',          { get:()=>y          });
	Object.defineProperty(self, 'user',       { get:()=>user       });
	Object.defineProperty(self, 'destructed', { get:()=>destructed });
}

module.exports.prototype = 
{
	E : E,
}
