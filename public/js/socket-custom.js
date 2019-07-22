var socket = io();


//ON = ESCUCHAR
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Permidos Conexión al servidor');
});

//Enviar Informacin
socket.emit('enviarMensaje', {
    usuario: 'Nicolas',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(message) {
    console.log('Info del Servidor', message);
});