const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'))
 
const expressServer = app.listen(8000)
const io = socketio(expressServer)

io.on('connection', (socket) => {
    console.log(socket.id, "has connected");

    socket.emit('messageFromServer', {data: "This is the message from Socket Server"})

    socket.on('announcement', (data) => {
        console.log(data.data);

        io.emit('announcement', {data: data.data})
    })  
})