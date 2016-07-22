var twgl = require('twgl.js');
var vs = require('./shaders/example.vert');
var fs = require('./shaders/example.frag');

var gl          = twgl.getWebGLContext(document.getElementById('main'));
var program     = twgl.createProgramFromSources(gl, [vs(), fs()]);
var programInfo = twgl.createProgramInfoFromProgram(gl, program);

var arrays = 
{
	position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};
var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render(time)
{
	twgl.resizeCanvasToDisplaySize(gl.canvas);
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

	var uniforms = 
	{
		time: time * 0.001,
		resolution: [gl.canvas.width, gl.canvas.height],
	};

	global.uniforms = uniforms;

	gl.useProgram(programInfo.program);
	twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
	twgl.setUniforms(programInfo, uniforms);
	twgl.drawBufferInfo(gl, gl.TRIANGLES, bufferInfo);

	requestAnimationFrame(render);
}

global.uniforms = [];
requestAnimationFrame(render);
