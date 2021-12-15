// const { Socket } = require('socket.io');

//node server whicj will handle socket io connections
const io = require('socket.io')(8000)

const users = {};

io.on('connection', socket =>{ // jese hi connection aaye iss function ko run kardo ,it will listen incoming event , it is instance of socket.io
    socket.on('new-user-joined',name=>{//jab bhi ek particular connection hoga to kya karna he
        console.log("New user ",name)
        users[socket.id] = name;  // ye name append/add ho jaega users ke andar
        socket.broadcast.emit('user-joined',name)
    })

    socket.on('send',message=>{ //agar koi send even =t karega to baki sab ko send karva do ,client me bhi isi name se banao
        socket.broadcast.emit('recieve',{message:message, name: users[socket.id]})
    })

})