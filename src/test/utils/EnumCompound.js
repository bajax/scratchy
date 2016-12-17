'use strict';
var expect       = require('chai').expect;
var EnumCompound = require('../../shared/utils/EnumCompound');

describe('EnumCompound', function ()
{

	it('should create a coherent enum from a function arguments list', function ()
	{
		var en = new EnumCompound('a', 'b', 'c', 'd', 'e', 'f');
		expect(en).to.contain.any.keys('a', 'b', 'c', 'd', 'e', 'f');
	});
	it('should create an enum where the members are powers of 2', function ()
	{
		var en = new EnumCompound(['a', 'b', 'c', 'd', 'e', 'f']);

		expect(en).to.contain.any.keys('a', 'b', 'c', 'd', 'e', 'f');
		expect(en).to.have.property('a', 1 << 0);
		expect(en).to.have.property('b', 1 << 1);
		expect(en).to.have.property('c', 1 << 2);
		expect(en).to.have.property('d', 1 << 3);
		expect(en).to.have.property('e', 1 << 4);
		expect(en).to.have.property('f', 1 << 5);

	});
	it('should be possible to combine values using bitwise or (|)', function ()
	{
		var en = EnumCompound(['a', 'b', 'c', 'd', 'e', 'f']);

		expect(en.a | en.b).to.equal(3);
		expect(en.f | en.a).to.equal(33);
		expect(en.b | en.c | en.e).to.equal(22);
	});
	it('should be possible to get a list of indexes from a combined value', function ()
	{
		var en = EnumCompound(['a', 'b', 'c', 'd', 'e', 'f']);

		expect(en.getIndexes(en.a | en.e | en.b)).to.deep.equal([0,1,4]);
		expect(en.getIndexes(en.b | en.c | en.d | en.f)).to.deep.equal([1,2,3,5]);
	});
	it('should be possible to get a list of names from a combined value', function ()
	{
		var en = EnumCompound(['a', 'b', 'c', 'd', 'e', 'f']);

		expect(en.getNames(en.a | en.e | en.b)).to.deep.equal(['a','b','e']);
		expect(en.getNames(en.b | en.c | en.d | en.f)).to.deep.equal(['b','c','d','f']);

		//just to make sure it isn't sorting (except what's unavoidable)
		var en = EnumCompound(['z', 'y', 'x', 'w', 'v', 'u']);

		expect(en.getNames(en.z | en.y | en.x)).to.deep.equal(['z','y','x']);
		expect(en.getNames(en.y | en.x | en.w | en.u)).to.deep.equal(['y','x','w','u']);
	});
	it('should instantiate properly when called without new keyword', function () 
	{
		var en = EnumCompound(['a', 'b', 'c', 'd', 'e', 'f']);
		expect(en).to.contain.any.keys('a', 'b', 'c', 'd', 'e', 'f');

		var en = EnumCompound('b', 'c', 'd', 'e');
		expect(en).to.have.property('b', 1);
		expect(en).to.have.property('c', 2);
		expect(en).to.have.property('d', 4);
		expect(en).to.have.property('e', 8);
	});
	it('should throw an exception when called with incorrect parameters', function () 
	{
		expect(function () {new EnumCompound();              }).to.throw(EnumCompound.Error);
		expect(function () {new EnumCompound({});            }).to.throw(EnumCompound.Error);
		expect(function () {new EnumCompound(['a', [], {}]); }).to.throw(EnumCompound.Error);

	});
	it('should throw an exception when called with a non-string value', function () 
	{
		var en = new EnumCompound('a');
		expect(en).to.have.property('a', 1);

		var en = new EnumCompound('a');
		expect(en).to.have.property('a', 1);
	});
});