var twgl = require('twgl.js');
var vs   = require('../shaders/flat.vert');
var fs   = require('../shaders/brush.frag');



function SimpleStrokes(params)
{
	if (not this instanceof SimpleStrokes)
		return new SimpleStrokes(params);
	var self    = this;
	var strokes = [];
	var window = params.window;
	var arrays = 
	{
		position: CANVAS_POLYGON,
	};


	var x, y, button;
	button = new Uint8Array(4); 

	window.addEventListener('mousemove',  (e) => {x = e.layerX; y = e.layerY; });
	window.addEventListener('mousedown',  (e) => {button[e.button] = true;    });
	window.addEventListener('mouseup',    (e) => {button[e.button] = false;   });

	const CANVAS_POLYGON = [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0];

	var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

	var lastp = [0,0];

	function render(time)
	{
		if (!button[0])
		{
			lastp = [x, gl.canvas.height - y ];
			requestAnimationFrame(render);
			return;
		}

		twgl.resizeCanvasToDisplaySize(gl.canvas);
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

		gl.useProgram(programInfo.program);
		
		twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
		twgl.setUniforms(programInfo,
		{
			resolution : [gl.canvas.width, gl.canvas.height],
			loc_from   : lastp,
			loc_to     : lastp = [x, gl.canvas.height - y ],
			size       : 10,
			spread     : 100,
			color      : [1,1,1,1],
		});

		twgl.drawBufferInfo(gl, gl.TRIANGLES, bufferInfo);

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
}


