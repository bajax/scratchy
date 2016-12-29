const Enum = require('./utils/Enum');
module.exports = 
{
	COORDINATOR : Enum(
	[
		'STROKE_ADD',
		'CLEAR_CANVAS',
		'PUBLISH_HANDLES',
		'CONSUME_HANDLES',
		'CONSTRUCT',
		'DESTRUCT',
	]),
	PRESENCE : Enum(
	[
		'REPOSITION',    //Relays cursor position information.
		'PEN_DOWN',      //Pen is placed down.  Relays initial vertex.
		'PEN_MOVE',      //Pen moves after being placed down.  Relays new vertex.
		'PEN_UP',        //Pen finishes movement.
		'PEN_CANCEL',    //Pen stroke is cancelled, and vertices are cleared.
		'TOOL_CHANGE',   //Relays new tool def.
		'CLEAR_CANVAS',  //The canvas gets cleared
		'JOIN',          //A user joins
		'PART',          //A user parts
		'KICK',          //The client gets kicked (when someone else gets kicked, it's just a PART)
	]),
	TOOL : Enum(
	[
		'ACTIVATE',
		'DEACTIVATE',
		'DELETE',
		'COLOR_CHANGE',
		'CHANGE',
	]),
};
