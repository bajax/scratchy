'use strict';
const Canvas      = require('./Canvas');
const Presence    = require('./Presence');
const E           = require('../../shared/event_types').COORDINATOR;
const ez_dispatch = require('../../shared/utils/ez_dispatch');
const ez_respond  = require('../../shared/utils/ez_respond');

/**
 * Client-side version of the server coordinator.
 */
module.exports = function ClientCoordinator (params)
{
	if (new.target !== ClientCoordinator)
		return new ClientCoordinator(params);
	const self = this;

	ez_dispatch(self, E);

	const w = ez_dispatch(params.window);
	const h = ez_dispatch(params.canvas);

	let canvas;
	let presence;

	ez_respond(self, 
	[
		[w, 'beforeunload', onDestruct, ],
	
		[self, E.STROKE_ADD,      onStrokeAdd,      ],
		[self, E.CLEAR_CANVAS,    onClearCanvas,    ],
		[self, E.PUBLISH_HANDLES, onPublishHandles, ],
		[self, E.CONSUME_HANDLES, onConsumeHandles, ],
		[self, E.CONSTRUCT,       onConstruct,      ],
		[self, E.DESTRUCT,        onDestruct,       ],
	]);

	//went ahead and stubbed out all of the functions, even though I don't know if I'll use them all in this object yet.

	/**
	 * Set up a presence for a new user on the canvas
	 */
	function onJoin () 
	{

	}
	/**
	 * Remove a presence from the room, or respond to a Kick.
	 */
	function onPart () 
	{

	}
	/**
	 * Add a stroke to the canvas.
	 */
	function onStrokeAdd () 
	{

	}

	/**
	 * Basically, this event is just relayed to the canvas, but it's kept for consistency
	 */
	function onClearCanvas () 
	{

	}

	/** 
	 * Events that register with this event in the dispatcher will send out handles to themselves on this event.
	 */
	function onPublishHandles (handles)
	{
		handles.coordinator = self;
		handles.html_target = h;
		handles.window      = w;
	}

	/**
	 * Signifies that all the handles registered in onPublishHandles are good to go, clients can consume them now.
	 */
	function onConsumeHandles (handles) 
	{
		if (handles.canvas)
			canvas = handles.canvas;
		if (handles.presence)
			presence = handles.presence;
	}

	/** 
	 * Called when it's time to link the program and get ready to run.
	 */
	function onConstruct () 
	{
		let cb = (...args) => self.emit(E.CONSUME_HANDLES, ...args);
		self.on(E.PUBLISH_HANDLES, cb);
		self.emit(E.PUBLISH_HANDLES, {});
		self.off(E.PUBLISH_HANDLES, cb);
	}
	
	/**
	 * Execution has ended, destroy everything and send user back to initial screen.
	 */
	function onDestruct () 
	{
		self.allOff();
	}


	self.allOn();
	Canvas(
	{
		coordinator : self,
		html_target : h,
		window      : w,
	});
	Presence(
	{
		coordinator : self,
	});


};
