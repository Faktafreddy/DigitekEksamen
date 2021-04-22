// DigiTek Machine Learning Projekt
// Få fat på alle vores libraries.
const http = require("http");
const express = require("express");
const osc = require("node-osc");
const socketio = require("socket.io");

// Opsæt express som vores app
const app = express();
// Sørger for at app kun viser vores klienter "client" mappen.
app.use(express.static(`${__dirname}/../client`));

// Opsæt HTTP Server til socket.io.
const server = http.createServer(app);
const io = socketio(server);

// Opsæt OSC server på localhost port 12000 så vi kan kommunikere med Wekinator.
let oscServer = new osc.Server(12000, '127.0.0.1', () => {
    console.log('OSC Server is listening');
});

// Vores socket lytter nu efter en forbindelse til en af vores klienter.
io.on('connection', (socket) => {
    // Når forbindelse er blevet oprettet med Klient.
    console.log('Socket connection');
    // OSC Server lytter nu efter en af disse beskeder.
    // Når beskeden er modtaget sender Socket et tal til Klienten, baseret på den modtagede OSC besked.
    oscServer.on('/rod', () => {
        socket.send(1)
    });
    oscServer.on('/orange', () => {
        socket.send(2)
    });
    oscServer.on('/gul', () => {
        socket.send(3)
    });
    oscServer.on('/gron', () => {
        socket.send(4)
    });
    oscServer.on('/bla', () => {
        socket.send(5)
    });
    oscServer.on('/lilla', () => {
        socket.send(6)
    });
    oscServer.on('/sort', () => {
        socket.send(7)
    });
    oscServer.on('/hvid', () => {
        socket.send(8)
    });
});

// HTTP lytter efter mulige fejl og konsol logger fejlene hvis nogen bliver fundet.
server.on('error', (err) => {
    console.error(err);
});

// HTTP/Socket lytter til port 8080 efter forbindelser og logger når der findes forbindelse.
server.listen(8080, () => {
    console.log('Server is ready');
});