const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use('/', express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    res.end()
});


app.get('/status', (req, res) => {
    console.log("fuck2")
    res.end("ok")
});


app.get('/control', (req, res) => {
    console.log("fuck233")
    res.end("ok")
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});