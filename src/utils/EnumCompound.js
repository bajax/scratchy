/** 
 * Generates an object enum from an array of strings.  Returns an object with 
 * the strings as the keys, the indexes as the values.  A convenience 
 * function. 
 * 
 * Exactly like Enum, but it allows you to store multiple enums in a single 
 * value only by ORing with the pipe operator, because it indexes by powers of 2.
 * @param array|string Either pass a single array of strings, or call the function with a variable length arguments list of strings.
 * @return EnumCompound instance
 */
'use strict';
module.exports = function EnumCompound ()
{
	var list = !arguments[0] || !arguments[0].constructor || Array.isArray(arguments[0]) 
		? arguments[0] 
		: Array.prototype.slice.call(arguments);

	if(!(this instanceof EnumCompound))
		return new (EnumCompound.bind.apply(EnumCompound, [null].concat(Array.prototype.slice.call(arguments))));

	if (!list)
		throw new Error('At least one enum argument required.');

	for (var i = 0; i < list.length; i++)
	{
		if (typeof list[i] !== 'string')
			throw new Error('All enum keys must be strings.  Got: ' +
				(Array.isArray(list[i]) ? 'array' : typeof list[i]));
		if (list[i].match(/^[^a-zA-Z_]+|[^a-zA-Z_0-9]+/g))
			throw new Error('Invalid characters in enum key: ' + list[i]);
		this[list[i]] = 1 << i;
	}

	this.length = list.length;

	this.getName      = (id)  => list[powers_of_2_table[id]] || null;
	this.getIndexes   = (cmp) => powers_of_2_table.map((pw2, i) => cmp & pw2 ? i : false).filter((i) => i !== false);
	this.getNames     = (id)  => (id !== 0 && !id) ? list : this.getIndexes(id).map((i) => list[i]);

	Object.freeze(this);
};

var powers_of_2_table = 
[
	1 <<  0, 1 <<  1, 1 <<  2, 1 <<  3, 1 <<  4, 1 <<  5, 1 <<  6, 1 <<  7, 
	1 <<  8, 1 <<  9, 1 << 10, 1 << 11, 1 << 12, 1 << 13, 1 << 14, 1 << 15,
	1 << 16, 1 << 17, 1 << 18, 1 << 19, 1 << 20, 1 << 21, 1 << 22, 1 << 23,
	1 << 24, 1 << 25, 1 << 26, 1 << 27, 1 << 28, 1 << 29, 1 << 30, 1 << 31,
];

module.exports.prototype =
{
	NONE         : 0,
	NA           : 0,
	INVALID      : 0,
}

var Error = module.exports.Error = function EnumCompoundError (msg) 
{
	this.message  = msg;
	this.toString = function ()
	{
		return this.message;
	};
};
