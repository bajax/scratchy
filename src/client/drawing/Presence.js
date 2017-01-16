'use strict';
const socket      = require('socket.io-client');
const E           = require('shared/event_types').PRESENCE;
const ez_dispatch = require('shared/utils/ez_dispatch');
const ez_respond  = require('shared/utils/ez_respond');

/**
 * Represents the presence of a user in a room.  Talks directly to a websocket 
 * for the individual user.
 */
module.exports = function Presence (params)
{
	if (new.target !== Presence)
		return new Presence(params);
	const self = this;

	const c = params.coordinator;
	let s;
	let h;
	let w;

	let events = 
	[
		[c, c.E.PUBLISH_HANDLES, onConstruct, ],
		[c, c.E.CONSUME_HANDLES, onConstruct, ],
		[c, c.E.CONSTRUCT, onConstruct, ],
		[c, c.E.DESTRUCT,  onDestruct,  ],

		[self, E.REPOSITION,   onReposition,  ],
		[self, E.PEN_DOWN,     onPenDown,     ],
		[self, E.PEN_MOVE,     onPenMove,     ],
		[self, E.PEN_UP,       onPenUp,       ],
		[self, E.PEN_CANCEL,   onPenCancel,   ],
		[self, E.TOOL_CHANGE,  onToolChange,  ],
		[self, E.CLEAR_CANVAS, onClearCanvas, ],
		[self, E.JOIN,         onJoin,        ],
		[self, E.PART,         onPart,        ],
		[self, E.KICK,         onKick,        ],
	];
	let remote_events;
	ez_dispatch(self, E);
	ez_respond(self, events);
	self.allOn();

	let connected = false;

	/** 
	 * Events that register with this event in the dispatcher will send out handles to themselves on this event.
	 */
	function onPublishHandles (handles)
	{
		handles.presence = self;
	}

	/**
	 * Signifies that all the handles registered in onPublishHandles are good to go, clients can consume them now.
	 */
	function onConsumeHandles (handles) 
	{
		if (handles.canvas)
			canvas = handles.canvas;
		if (handles.html_target)
			h = handles.html_target;
		if (handles.window)
			w = handles.window;
	}

	function onConstruct()
	{
		s = socket();
		self.appendToEventsAndActivate([[s, 'connect', remoteConnect]]);
	}

	function onDestruct()
	{
		s.close();
		self.allOff();
	}

	//Don't know if I'll need to use all of these, but they're here just to avoid messy reorganization later
	function onReposition ()
	{
	}
	function onPenDown ()
	{
	}
	function onPenMove ()
	{
	}
	function onPenUp ()
	{
	}
	function onPenCancel ()
	{
	}
	function onToolChange ()
	{
	}
	function onClearCanvas ()
	{
	}
	function onJoin ()
	{
	}
	function onPart ()
	{
	}
	function onKick ()
	{
	}
	
	function remoteConnect ()
	{
		self.appendToEventsAndActivate(
		[
			[s, 'disconnect',   remoteDisconnect,  ],
			[s, E.REPOSITION,   remoteReposition,  ],
			[s, E.PEN_DOWN,     remotePenDown,     ],
			[s, E.PEN_MOVE,     remotePenMove,     ],
			[s, E.PEN_UP,       remotePenUp,       ],
			[s, E.PEN_CANCEL,   remotePenCancel,   ],
			[s, E.TOOL_CHANGE,  remoteToolChange,  ],
			[s, E.CLEAR_CANVAS, remoteClearCanvas, ],
			[s, E.JOIN,         remoteJoin,        ],
			[s, E.PART,         remotePart,        ],
			[s, E.KICK,         remoteKick,        ],
		]);
		this.connected = true;
	}
	function remoteDisconnect ()
	{
	}

	function remoteReposition () 
	{

	}
	function remotePenDown () 
	{

	}
	function remotePenMove () 
	{

	}
	function remotePenUp () 
	{

	}
	function remotePenCancel () 
	{

	}
	function remoteToolChange () 
	{

	}
	function remoteClearCanvas () 
	{

	}
	function remoteJoin () 
	{

	}
	function remotePart () 
	{

	}
	function remoteKick () 
	{

	}

	Object.defineProperty(self, 'connected', { get: ()=>connected });
}
