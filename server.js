const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));
app.use(express.text({ limit: '10mb' }));

app.post('/update-qr', (req, res) => {
    io.emit('qr_update', req.body);
    res.sendStatus(200);
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
