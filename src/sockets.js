var config;
module.exports = (_config) =>
{
	config = _config;
	return sockets;
}

function sockets (io)
{
	io.on('connection',    (socket) => console.log('a user connected'));
	io.on('disconnection', (socket) => console.log('a user disconnected'));
}