const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    //Enviar Informacin
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta Aplicacion'
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    //Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            message: data.message
        })

        /*      if (message.usuario) {
                 callback({
                     resp: 'TODO SALIO BIEN!'
                 });
             } else {
                 callback({
                     resp: 'TODO SALIO MAL!!!!'
                 });
             } */





    });


});