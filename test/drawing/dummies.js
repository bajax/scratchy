/**
 * Dummy objects -- for testing with dependency injection!  Is nice!
 */
const EventEmitter = require('events');
const Enum         = require('../../src/utils/Enum');

var cee = new EventEmitter();
var dummy_coordinator =
{
	E : Enum('USER_JOIN', 'USER_PART', 'STROKE_ADD', 'CLEAR_CANVAS', 'PUBLISH_HANDLES', 'CONSUME_HANDLES', 'CONSTRUCT', 'DESTRUCT'),
	ee   : cee,
	emit : (...args) => cee.emit(...args),
	on   : (...args) => cee.on(...args),
	off  : (...args) => cee.removeListener(...args),
	dump : (...args) => cee.removeAllListeners(...args),
};

var pee = new EventEmitter();
var dummy_presence =
{
	E : Enum('REPOSITION', 'PEN_DOWN', 'PEN_MOVE', 'PEN_UP', 'PEN_CANCEL', 'TOOL_CHANGE', 'ENTER', 'LEAVE'),
	ee   : pee,
	emit : (...args) => pee.emit(...args),
	on   : (...args) => pee.on(...args),
	off  : (...args) => pee.removeListener(...args),
	dump : (...args) => pee.removeAllListeners(...args),
};

module.exports = 
{
	presence    : dummy_presence,
	coordinator : dummy_coordinator,
}