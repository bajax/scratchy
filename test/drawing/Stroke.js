'use strict';
var expect = require('chai').expect;
var Stroke = require('../../src/drawing/Stroke');
var Enum   = require('../../src/utils/Enum');

var dummy_coordinator =
{
	E : Enum('USER_JOIN', 'USER_PART', 'STROKE_ADD', 'CLEAR_CANVAS', 'PUBLISH_HANDLES', 'CONSUME_HANDLES', 'CONSTRUCT', 'DESTRUCT'),
	on : (e, f) => 
	{

	},
	emit : (e) =>
	{
		this.ev[e]();
	},
	on : (e, f) => 
	{
		this.ev[e] = f;
	},
	removeAll : (e) =>
	{
		ev = {};
	},
};

var dummy_presence =
{
	E : Enum('REPOSITION', 'PEN_DOWN', 'PEN_MOVE', 'PEN_UP', 'PEN_CANCEL', 'TOOL_CHANGE', 'ENTER', 'LEAVE'),
	ev : {},
	tool : 
	{
		
	},
	emit : (e) =>
	{
		this.ev[e]();
	},
	on : (e, f) => 
	{
		this.ev[e] = f;
	},
	removeAll : (e) =>
	{
		ev = {};
	},
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
