module.exports = 
{
	COORDINATOR : Enum(
	[
		'USER_JOIN',
		'USER_PART',
		'STROKE_ADD',
		'CLEAR_CANVAS',
		'PUBLISH_HANDLES',
		'CONSUME_HANDLES',
		'CONSTRUCT',
		'DESTRUCT'
	]),
	PRESENCE : Enum(
	[
		'REPOSITION',
		'PEN_DOWN',
		'PEN_MOVE',
		'PEN_UP',
		'PEN_CANCEL',
		'TOOL_CHANGE',
		'ENTER',
		'LEAVE'
	]),
};
