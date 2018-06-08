// Dependencies
const express = require('express');
const socket = require('socket.io');
const app = express();

// Settings
const port = process.env.PORT || 3000;


const server = app.listen(port, (err) => {
    if (err)
        console.log(err);
    console.log(`Server is now listening on port ${port}`);
});

const io = socket(server);

io.on('connection', (socket) => {
    console.log(`Made connection on ${socket.id}`);
    socket.on('select', (data) => {
        io.sockets.emit('')
    });
});