const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});

userSocketMap = {}

function getAllConnectedClints(roomId) {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
        return {
            socketId,
            name: userSocketMap[socketId],
            roomId
        }
    })
}

io.on("connection", (socket) => {
    socket.on("send", (arg) => {
        socket.broadcast.emit("sent", arg);
    });

    // io.emit('hello', 'wold')
    socket.on('join', ({ roomId, name }) => {
        userSocketMap[socket.id] = name
        socket.join(roomId)
        const clients = getAllConnectedClints(roomId)
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit('joined', {
                clients,
                name,
                socketId
            })
        })
    })

});
httpServer.listen(4000);