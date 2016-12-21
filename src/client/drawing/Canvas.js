'use strict';
const twgl = require('twgl');
const vs   = require('../shaders/flat.vert');
const fs   = require('../shaders/brushes/binary.frag');

//TODO: Decide if I want to 

/**
 * Represents a client-side canvas--manages the GL graphics context, and UI events.
 * TODO: Get rid of all calls that require the new operator in my code.
 * TODO: Implement layers
 */
module.exports = function Canvas (params, c)
{
	const self = {};
	
	const htelement = params.canvas;

	const gl            = twgl.getWebGLContext(canvas);
	const canvas_buffer = twgl.createBufferInfoFromArrays(gl, {position:SQUARE});
	const stroke_buffer = twgl.createBufferInfoFromArrays(gl, {position:SQUARE});;
	const program       = twgl.createProgramFromSources(gl, [vs(), fs()]);
	const program_info  = twgl.createProgramInfoFromProgram(gl, program);

	const strokes       = [];
	/**
	 * Define all of this object's events in one place, to avoid future bugs 
	 * eg forgetting to unregister them.
	 * 0 = which emitter receives the event
	 * 1 = the event's ID
	 * 2 = the function to run
	 * TODO: Is it possible to make this, allOn and allOff a decorator or something? 
	 * Is that even worth doing?
	 */
	var events = 
	[
		[c, c.E.CLEAR_CANVAS, onClearCanvas ],
		[c, c.E.STROKE_ADD,   receiveStroke ],
		[c, c.E.DESTRUCT,     allOff        ],
	];

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

	/**
	 * Clears strokes, and the canvas buffers.
	 * TODO: Unregister in-progress strokes
	 * TODO: Clear the stroke buffer
	 * TODO: Clear the canvas buffer
	 * TODO: Clear the strokes list
	 */
	function onClearCanvas()
	{
		strokes.length = 0;
		//TODO: clear the canvases
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
		gl.useProgram(program_info.program);
	
		twgl.setBuffersAndAttributes(gl, program_info, canvas_buffer);
		twgl.setUniforms(program_info,
		{
			resolution : [gl.canvas.width, gl.canvas.height],
			loc_from   : lastp,
			loc_to     : lastp = [x, gl.canvas.height - y ],
			size       : 10,
			spread     : 100,
			color      : [1,1,1,1],
		});

		twgl.drawBufferInfo(gl, gl.TRIANGLES, canvas_buffer);

	}

	/**
	 * Receives a complete stroke.
	 */
	function receiveStroke(stroke)
	{
		strokes.push(stroke);
	}

	/**
	 * Pen down -- used to draw a stroke while you draw it.
	 * might be later abstracted to accept other users strokes in progress, depending
	 * on performance concerns.
	 * In-progress strokes are always going to be weird-- whoever lets up last will 
	 * ALWAYS come out on top.  The amount of work required to get in-progress blending
	 * makes so little sense to do.  It would amount to a cute trick at best.
	 */
	 function penDown ()
	 {

	 }

 	/**
	 * Pen move
	 */
	 function penMove ()
	 {

	 }

 	/**
	 * Pen up
	 */
	 function penUp ()
	 {

	 }

	 /**
	  * Makes some vars global for REPL.
	  */
	function globalize()
	{
		global.canvas = self;
	}

	return self;
}

/**
 * Wraps any dispatcher, making it duck-type compliant with what we are using
 * (on, off, etc.)
 * Todo: Figure out if this is the right thing to do.
 */
function EventWrapper(dispatcher_core)
{

}


module.exports.prototype = 
{

}

//A square of two tris
const SQUARE = 
[
	-1, -1,  0,
	 1, -1,  0,
	-1,  1,  0,

	-1,	 1,  0,
	 1, -1,  0,  
	 1,  1,  0,
];
