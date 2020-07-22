var socket = io();

// "on" para escuchar
socket.on("connect", function() {
    console.log("Conectado al servidor");
});

// "on" para escuchar
socket.on("disconnect", function() {
    console.log("Perdimos conexion con el servidor");
});

// "emitir" Enviar informacion
socket.emit(
    "enviarMensaje", {
        usuario: "Fernando",
        mensaje: "Hola Mundo",
    },
    function(resp) {
        console.log("respuesta sever:", resp);
    }
);

// Escuchar
socket.on("enviarMensaje", function(resp) {
    console.log("servidor:", resp);
});