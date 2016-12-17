const socket = require('socket.io-client')();
const $      = require('jquery');

$(window).on('beforeunload', function(){
    socket.close();
});

socket.on('connect',       ()=> console.log('connected'));
socket.on('test',         ()=> console.log('test from server'));

function d ()
{
	socket.emit('test');
	setTimeout(d, 1000 * 3);
}
d();
