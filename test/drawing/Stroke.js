'use strict';
const expect       = require('chai').expect;
const Stroke       = require('../../src/drawing/Stroke');

const c = require('./dummies').coordinator;
const p = require('./dummies').presence;

describe('Stroke', () =>
{
	const verts =
	[
		[12,     0,     1,     0,    0],
		[0,      1,     1.2,   0,    0],
		[100,    1,     .9,    0,    0],
		[1,      3,     1.1,   0,    0],
		[0,      1,     1.9,   0,    0],
		[3,      5,     2.2,   0,    0],
	];

	const events =
	[
		[c, c.E.CLEAR_CANVAS ],
		[c, c.E.DESTRUCT     ],
		[p, p.E.PEN_MOVE     ],
		[p, p.E.PEN_UP       ],
		[p, p.E.PEN_CANCEL   ],
		[p, p.E.TOOL_CHANGE  ],
		[p, p.E.LEAVE        ],
	];

	it('should instantiate and register events', () =>
	{
		events.forEach(e =>
		{
			new Stroke({}, p, c);
			expect(e[0].emit(e[1])).to.equal(true);
			c.emit(c.E.DESTRUCT);
		});
	});

	it('should respond to PEN_MOVE events, adding new vertices to its length', () =>
	{
		var s;
		verts.forEach(vert =>
		{
			if (!s)
				s = new Stroke({init_vert : vert}, p, c);
			else
				p.emit(p.E.PEN_MOVE, vert);
			expect(s.complete).to.equal(false);
		});

		p.emit(p.E.PEN_UP);
		expect(s.vertices).to.deep.equal(verts);
		expect(s.complete).to.equal(true);
		c.emit(c.E.DESTRUCT);
	});

	it('should trigger STROKE_ADD after receiving PEN_UP with stroke info', () =>
	{
		var event_called = false;
		c.on(c.E.STROKE_ADD, () => event_called = true);
		c.on(c.E.STROKE_ADD, stroke => expect(stroke.vertices).to.deep.equal(verts));
	
		var s;
		verts.forEach(vert =>
		{
			if (!s)
				s = new Stroke({init_vert : vert}, p, c);
			else
				p.emit(p.E.PEN_MOVE, vert);
			expect(s.complete).to.equal(false);
		});
		p.emit(p.E.PEN_UP);
		expect(s.complete).to.equal(true);
		expect(event_called).to.equal(true);
		c.emit(c.E.DESTRUCT);
		c.dump(c.E.STROKE_ADD);
	});

	/** Future feature
	it('should handle tool params correctly', () =>
	{
		throw new Error('test not written');
	});
	*/

	it('should unregister its events on destruct', () =>
	{
		events.forEach(e =>
		{
			new Stroke({}, p, c);
			c.emit(c.E.DESTRUCT);
			expect(e[0].emit(e[1])).to.equal(false);
		});
	});
});
