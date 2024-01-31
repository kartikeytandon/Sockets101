const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'))
 
const expressServer = app.listen(8000)
const io = socketio(expressServer)

// Connecting with Server
io.on('connection', (socket) => {
    console.log(socket.id, "has connected");

    // sending message from server
    // socket.emit('eventNameThatFrontendIsLookingFor', {data along with it})
    socket.emit('messageFromServer', {data: "Hello from Socket server!"})
    socket.on('messageFromClient', (data) => {
        console.log("Message from Client Socket: " + data.data);
    })
})