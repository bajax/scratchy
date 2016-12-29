/**
 * Adds all the events for the given object, along with allOn and allOff methods.
 */ 
module.exports = function ez_respond(responder, events)
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

	responder.allOn  = allOn;
	responder.allOff = allOff;

	return responder;
};
