'use strict';
var expect      = require('chai').expect;
var Coordinator = require('../../src/drawing/Coordinator');
var Enum        = require('../../src/utils/Enum');

var dummy_dispatcher = 
{
	
}

var coordinator_params =
{
	
}

describe('Coordinator', () =>
{
	it('should instantiate', () =>
	{
		throw new Error('test not written');
	});

	it('should respond properly to a user join event', () =>
	{
		throw new Error('test not written');
	});

	it('should respond properly to a user part event', () =>
	{
		throw new Error('test not written');
	});
	
	it('should relay cursor position information between all users', () =>
	{
		throw new Error('test not written');
	});

	it('should forward completed strokes to all users', () =>
	{
		throw new Error('test not written');
	});

	/** TODO: add this feature in the future.  For now, it's too complex. 
	it('should forward partial strokes to all users', () =>
	{
		throw new Error('test not written');
	});
	*/

	it('should be able to get the complete list of strokes for its canvas', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to clear out the canvas after a specified time and forward that event to users', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to get the complete list of strokes for its canvas', () =>
	{
		throw new Error('test not written');
	});

	it('should rate-limit users via a rolling window or some other predictable mechanism', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to save images (stroke collections) in the database', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to save stroke collections in bulk from the client (as when saving Oekakis)', () =>
	{
		throw new Error('test not written');
	});

	/** 
	  * TODO: I don't know how to do this yet.  Are there node-based WebGL renderers?
	it('should be able to render a stroke collection to a PNG image', () =>
	{
		throw new Error('test not written');
	});

	/**
	 * TODO: More future stuff
	  /
	it('should be able to add layers', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to remove layers', () =>
	{
		throw new Error('test not written');
	});
	/**
	 * VERY iffy on this.  Since the base unit in my drawing program is a stroke vertex, not a 
	 * pixel, being able to move stuff around arbitrarily seems kind of hard.  I might be able to
	 * make it a very OpenGL-ish stateful thing, where defining marquees and removing them are 
	 * considered strokes in and of themselves, but I don't know how well that's going to work.
	 * I definitely like the masking potential that marquees provide, but whether it'll be worth 
	 * the effort isn't clear to me yet.
	  /
	it('should be able to reposition selected areas of pixels.', () => 
	{
		throw new Error('test not written');
	});
	/** 
	 * Same deal as above.  Copy+paste is a very stange and iffy subject that I'd really like to
	 * tackle.  Should we import pixels from the system clipboard?  I definitely want people to 
	 * be able to import their own images as reference, so I don't know for sure yet.
	  /
	it('should be able to copy and paste.', () => 
	{
		throw new Error('test not written');
	});
	*/

	it('should allow users to vote to have others thrown out', () =>
	{
		throw new Error('test not written');
	});

	it('should instantiate', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to add strokes', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to provide bounds information', () =>
	{
		throw new Error('test not written');
	});

	it('should be able give a list of all strokes in it', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to clear its stroke list', () =>
	{
		throw new Error('test not written');
	});

	it('should destruct itself when the last user leaves', () =>
	{
		throw new Error('test not written');
	});

});

