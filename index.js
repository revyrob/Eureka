import express from 'express';
import http from 'http';
import { Server }  from 'socket.io';

const app = express();
<<<<<<< HEAD:index.js
const path = require('path')
const http = require('http');
=======
>>>>>>> 1f7341e0942ae79b1f4b0095e4fee9cd4bb15aac:app.js
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000

import {AppInfo} from './routes/index.js';

//needed don't touch
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
//needed don't touch



app.get('/', (req, res) => {
    res.render('index')
})

app.use('/', AppInfo);

app.get('/quickchat', (req, res) => {
    res.render('quickchat')
})

app.get('/reminders', (req, res) => {
    res.render('reminders')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/landing', (req, res) => {
    res.render('landing')
})
app.get('/prochat', (req, res) => {
    res.render('prochat')
})

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});

/////////////////////
//for the quick chat
/////////////////////
io.on('connection', socket => {
    console.log("New user connected")

    socket.username = "Anonymous"

    socket.on('change_username', data => {
        socket.username = data.username
    })

    //handle the new message event
    socket.on('new_message', data => {
        console.log("new message")
        io.sockets.emit('receive_message', { message: data.message, username: socket.username })
    })

})
