/** 
 * Generates an object enum from an array of strings.  Returns an object with 
 * the strings as the keys, the indexes as the values.  A convenience 
 * function. 
 * @param array|string Either pass a single array of strings, or call the function with a variable length arguments list of strings.
 */
'use strict';
module.exports = function Enum ()
{
	var list = !arguments[0] || !arguments[0].constructor || Array.isArray(arguments[0]) 
		? arguments[0] 
		: Array.prototype.slice.call(arguments);

	if(!(this instanceof Enum))
		return new (Enum.bind.apply(Enum, [null].concat(Array.prototype.slice.call(arguments))));

	if (!list)
		throw new Error('At least one enum argument required.');

	for (var i = 0; i < list.length; i++)
	{
		if (typeof list[i] !== 'string')
			throw new Error('All enum keys must be strings.  Got: ' +
				(Array.isArray(list[i]) ? 'array' : typeof list[i]));
		if (list[i].match(/^[^a-zA-Z_]+|[^a-zA-Z_0-9]+/g))
			throw new Error('Invalid characters in enum key: ' + list[i]);
		this[list[i]] = i + 1;
	}
	this.getName      = (id) => { return list[id]; };
	this.getNameArray = (id) => { return list; };
};

module.exports.prototype =
{
	NONE         : 0,
	NA           : 0,
	INVALID      : 0,
}

var Error = module.exports.Error = function EnumError (msg) 
{
	this.message  = msg;
	this.toString = function ()
	{
		return this.message;
	};
};
