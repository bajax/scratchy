var config;
module.exports = (_config) =>
{
	config = _config;
	return sockets;
}

function sockets (io)
{
	io.on('connection', (socket) => 
	{
		console.log('a user connected');
		socket.on('disconnect', socket => console.log('a user disconnected'));

		socket.on('test', () => console.log('test from client'));

		setInterval(() => 
		{
			socket.emit('test');
		}, 1000 * 2);

	});
}