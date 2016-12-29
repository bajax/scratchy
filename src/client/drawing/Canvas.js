'use strict';
const twgl        = require('twgl.js');
const vs          = require('../shaders/flat.vert');
const fs          = require('../shaders/brushes/binary.frag');
const ez_dispatch = require('../../shared/utils/ez_dispatch');
const ez_respond  = require('../../shared/utils/ez_respond');

/**
 * Represents a client-side canvas--manages the GL graphics context, and UI events.
 * TODO: Get rid of all calls that require the new operator in my code.
 * TODO: Implement layers
 */
module.exports = function Canvas (params)
{
	if (new.target !== Canvas)
		return new Canvas(params);
	var self = this;

	const c = params.coordinator;
	const h = params.html_target;

	const gl            = twgl.getWebGLContext(h);
	const canvas_buffer = twgl.createBufferInfoFromArrays(gl, {position:SQUARE});
	const stroke_buffer = twgl.createBufferInfoFromArrays(gl, {position:SQUARE});;
	const program       = twgl.createProgramFromSources(gl, [vs(), fs()]);
	const program_info  = twgl.createProgramInfoFromProgram(gl, program);
	const strokes       = [];

	ez_respond(self,
	[
		[c, c.E.CLEAR_CANVAS, onClearCanvas ],
		[c, c.E.STROKE_ADD,   receiveStroke ],
		[c, c.E.DESTRUCT,     destruct      ],
	]);

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
	 * Destruct
	 */
	 function destruct ()
	 {
	 	self.allOff();
	 }

	 /**
	  * Makes some vars global for REPL.
	  */
	function globalize()
	{
		global.canvas = self;
	}

	self.allOn();

	return self;
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
