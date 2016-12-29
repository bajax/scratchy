const EventEmitter = require('events');

/**
 * Adds an on, off, dump etc... methods, adapting to whatever the dispatcher type 
 * actually is.  Allows emitting and receiving function argument lists of arbitrary
 * length.
 * Used so that I can use the same routines on the front-end GUI as I do on the 
 * backend to manage events.
 * TODO: Work with more event dispatcher types (i.e. window
 */ 
module.exports = function ez_dispatch(dispatcher, events)
{
	if (events)
		dispatcher.E = events;

	if (!dispatcher.addEventListener)
	{
		const e = new EventEmitter();
		dispatcher.emit = (...args) => e.emit(...args);
		dispatcher.on   = (...args) => e.on(...args);
		dispatcher.off  = (...args) => e.removeListener(...args);
		dispatcher.dump = (...args) => e.removeAllListeners(...args);

		//stupid but doing it anyway (yay).  May add more later.
		dispatcher.addEventListener   = (...args) => e.addEventListener(...args);
		dispatcher.removeListener     = (...args) => e.removeListener(...args);
		dispatcher.removeAllListeners = (...args) => e.removeAllListeners(...args);
	}
	else
	{
		//TODO: might need to expand this thing's scope to cover more bases.
		dispatcher.emit = (...args) => dispatcher.emit(...args);
		dispatcher.on   = (...args) => dispatcher.on(...args);
		dispatcher.off  = (...args) => dispatcher.removeListener(...args);
		dispatcher.dump = (...args) => dispatcher.removeAllListeners(...args);
	}

	return dispatcher;
};
