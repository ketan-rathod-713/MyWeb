// nodeserver alag he ye alag he abhi k liye

const socket = io('http://localhost:8000')

const form = document.getElementById('send-container')
const message = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")  // jab  message aye to iss container ke andar dal do 

const Name = prompt("Enter your name to join ")
// jese hi name aaye 
socket.emit('new-user-joined',Name)
console.log('this is ')