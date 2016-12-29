const ClientCoordinator = require('./drawing/ClientCoordinator');

let c = ClientCoordinator(
{
	canvas : document.getElementById('main'),
	window : window,
});

c.emit(c.E.CONSTRUCT);
