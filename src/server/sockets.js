var config;

module.exports = (_config) =>
{
	config = _config;
	return sockets;
}

function sockets (io)
{
	/*io.on('connection', (socket) =>
	{
		console.log('a user connected');
		socket.on('disconnect', socket => console.log('a user disconnected'));
	});
	*/

	io.of('/chat').on('connection', (socket) =>
	{
		console.log('a drawer connected');
		socket.on('disconnect', socket => console.log('a drawer disconnected'));

	});
	io.of('/draw').on('connection', (socket) =>
	{
		console.log('a drawer connected');
		socket.on('disconnect', socket => console.log('a drawer disconnected'));

	});
}
