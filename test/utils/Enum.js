'use strict';
var expect = require('chai').expect;
var Enum   = require('../../src/utils/Enum');

describe('Enum', function ()
{

	it('should create a coherent enum from a function arguments list', function () 
	{
		var en = new Enum('a', 'b', 'c', 'd', 'e', 'f');
		expect(en).to.contain.any.keys('a', 'b', 'c', 'd', 'e', 'f');
	});
	it('should create a coherent enum from an array', function () 
	{
		var en = new Enum(['a', 'b', 'c', 'd', 'e', 'f']);

		expect(en).to.contain.any.keys('a', 'b', 'c', 'd', 'e', 'f');
	});
	it('should never start an enum at zero, but at one', function () 
	{
		var en = new Enum('a');
		expect(en).to.have.property('a', 1);

		var en = new Enum('b');
		expect(en).to.have.property('b', 1);
	});
	it('should instantiate properly when called without new keyword', function () 
	{
		var en = Enum(['a', 'b', 'c', 'd', 'e', 'f']);
		expect(en).to.contain.any.keys('a', 'b', 'c', 'd', 'e', 'f');

		var en = Enum('b', 'c', 'd');
		expect(en).to.have.property('b', 1);
		expect(en).to.have.property('c', 2);
	});
	it('should throw an exception when called with incorrect parameters', function () 
	{
		expect(function () {new Enum();              }).to.throw(Enum.Error);
		expect(function () {new Enum({});            }).to.throw(Enum.Error);
		expect(function () {new Enum(['a', [], {}]); }).to.throw(Enum.Error);

	});
	it('should throw an exception when called with a non-string value', function () 
	{
		var en = new Enum('a');
		expect(en).to.have.property('a', 1);

		var en = new Enum('a');
		expect(en).to.have.property('a', 1);
	});
});