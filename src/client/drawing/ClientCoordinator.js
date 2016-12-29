const Canvas   = require('./Canvas');
const Presence = require('./Presence');
const E        = require('../../shared/event_types').COORDINATOR;

/**
 * Client-side version of the server coordinator.
 */
module.exports = function ClientCoordinator (params)
{
	if (new.target !== ClientCoordinator)
		return new ClientCoordinator(params);
	const self = this;

	const w = params.window;
	const h = params.canvas;

	require('../../shared/utils/traitEZDispatcher')(self);
	require('../../shared/utils/traitEZDispatcher')(w);
	require('../../shared/utils/traitEZDispatcher')(h);

	require('../../shared/utils/traitResponder')(self, 
	[
		[self, E.JOIN,            onJoin,           ],
		[self, E.PART,            onPart,           ],
		[self, E.STROKE_ADD,      onStrokeAdd,      ],
		[self, E.CLEAR_CANVAS,    onClearCanvas,    ],
		[self, E.PUBLISH_HANDLES, onPublishHandles, ],
		[self, E.CONSUME_HANDLES, onConsumeHandles, ],
		[self, E.CONSTRUCT,       onConstruct,      ],
		[self, E.DESTRUCT,        onDestruct,       ],
	]);

	self.allOn();

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
	function onPublishHandles () 
	{

	}

	/**
	 * Signifies that all the handles registered in onPublishHandles are good to go, clients can consume them now.
	 */
	function onConsumeHandles () 
	{

	}
	/** 
	 * Called when it's time to link the program and get ready to run.
	 */
	function onConstruct () 
	{
		alert('here');
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
	}
	/**
	 * Execution has ended, destroy everything and send user back to initial screen.
	 */
	function onDestruct () 
	{
		self.allOff();
	}


};

module.exports.prototype = 
{
	E : E,
};
