'use strict';
var expect = require('chai').expect;
var Stroke = require('../../src/drawing/Stroke');

var dummy_coordinator =
{
	e : Enum('USER_JOIN', 'USER_PART', 'STROKE_ADD', 'CLEAR_CANVAS', 'PUBLISH_HANDLES', 'CONSUME_HANDLES', 'CONSTRUCT', 'DESTRUCT'),
};

var dummy_presence =
{
	e : Enum('REPOSITION', 'PEN_DOWN', 'PEN_MOVE', 'PEN_UP', 'PEN_CANCEL', 'TOOL_CHANGE', 'ENTER', 'LEAVE'),
};

describe('Stroke', () =>
{
	it('should instantiate', () =>
	{
		throw new Error('test not written');
	});

	it('should respond to update events to build itself', () =>
	{
		throw new Error('test not written');
	});

	it('should finish itself trigger a STROKE_ADD event when the client picks up their pen', () =>
	{
		throw new Error('test not written');
	});

	it('should destruct', () =>
	{
		throw new Error('test not written');
	});
});
