/**
 * Represents the presence of a user in a room.
 */
var Enum = require('../utils/Enum');

module.exports = function Presence (params, coordinator)
{
	var self = this;
	var x;
	var y;
	var user;
	var destructed = false;



	var tool =
	{ //just gonna hard code the tooldef into every stroke for now-- this way first-version stroke collections will (hopefully) be future proof.
		size  : 2, //assuming standard, pre-hidpi pixels
		color : [0,0,0,1],
		shape : 0, //0 will correspond to ROUND, I think.
	};

}

var PRESENCE_EV = module.exports.PRESENCE_EV = Enum(
	'REPOSITION',
	'PEN_DOWN',
	'PEN_MOVE',
	'PEN_UP',
	'PEN_CANCEL',
	'TOOL_CHANGE',
	'ENTER',
	'LEAVE'
);

module.exports.prototype = 
{
	E : PRESENCE_EV,
}
