const express = require('express')
const { param } = require('express/lib/request')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const {v4 : uuidV4} = require('uuid')

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
        res.redirect(`/${uuidV4()}`) // random uuid will be generated 
})

app.get('/:room',(req,res)=>{
          res.render('room',{roomId:req.params.room})
})


io.on('connection',socket=>{ // Now i need to listen to the events , anytume when someone conencts with their socket ha ha
    // Now i can listen to the events 
    
    socket.on('join-room',(roomId,userId)=>{
        console.log(roomId+" "+userId);
       console.log('asiudhaw');
        
    })

})


app.listen(80,()=>{
console.log('server is listening on port 3000 ');
})