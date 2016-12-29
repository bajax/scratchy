/**
 * Adds all the events for the given object, along with allOn and allOff methods.
 */ 
module.exports = function traitResponder(object, events)
{
	/**
	 * Register all events.
	 */
	function allOn()
	{
		events.forEach(event => event[0].on(event[1], event[2]));
	}

	/**
	 * Unregister all events.
	 */
	function allOff()
	{
		events.forEach(event => event[0].off(event[1], event[2]));
	}

	object.allOn  = allOn;
	object.allOff = allOff;
};
