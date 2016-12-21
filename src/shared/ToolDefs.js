const Enum = require('./utils/Enum');

/**
 * Defines our tools.  Each tool has different behavior, but all can
 * be executed with "strokes".  Pixel manipulating tools (copypaste, 
 * marquee) will have to come later.
 * We are functional, not beautiful.
 */
const TOOL_TYPES = Enum(
[
	'BINARY',
	'BRUSH',
	'ERASER',
]);



module.exports = 
{
	TOOL_TYPES    : TOOL_TYPES,
	DEFAULT_TOOLS :
	[
		{
			brush : TOOLS.BINARY,
			name  : 'Binary',
			size  : 2,
			color : [0,0,0,1],

		},
	],
	DEFAULT_PALLETTE :
	[
		[ 0, 0, 0, 1 ],
		[ 1, 1, 1, 1 ],
		[ 1, 0, 0, 1 ],
		[ 0, 1, 0, 1 ],
		[ 0, 0, 1, 1 ],
		[ 1, 1, 0, 1 ],
		[ 0, 1, 1, 1 ],
		[ 1, 0, 1, 1 ],
	],
};
