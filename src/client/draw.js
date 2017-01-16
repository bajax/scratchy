const ClientCoordinator = require('./drawing/ClientCoordinator');
const Socket            = require('socket.io-client');

let c = ClientCoordinator(
{
	canvas : document.getElementById('main'),
	window : window,
	Socket : Socket,
});

c.emit(c.E.CONSTRUCT);
