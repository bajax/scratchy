'use strict';
var expect   = require('chai').expect;
var Presence = require('../../src/drawing/Presence');
var Enum     = require('../../src/utils/Enum');

var dummy_coordinator =
{
}

describe('Presence', () =>
{
	it('should instantiate', () =>
	{
		throw new Error('test not written');
	});

	it('should listen for update events from the client (via coordinator)', () =>
	{
		throw new Error('test not written');
	});

	it('should forward PEN_DOWN events to the stroke below it', () =>
	{
		throw new Error('test not written');
	});

	it('should forward PEN_UP events to the stroke it\'s working on', () =>
	{
		throw new Error('test not written');
	});

	it('should respond to TOOL_CHANGE events', () =>
	{
		throw new Error('test not written');
	});

	it('should create new strokes with the appropriate tool', () =>
	{
		throw new Error('test not written');
	});

	it('should build strokes with proper pressure information', () =>
	{
		throw new Error('test not written');
	});

	it('should clear forwarded events when the stroke is completed', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to enter', () =>
	{
		throw new Error('test not written');
	});

	it('should be able to leave (and then, destruct)', () =>
	{
		throw new Error('test not written');
	});

	it('should destruct', () =>
	{
		throw new Error('test not written');
	});
});
