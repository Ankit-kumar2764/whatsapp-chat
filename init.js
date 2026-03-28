const mongoose = require('mongoose');
const Chat = require('./models/chat.js'); 

main().then(() => {
  console.log('connection successfull');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Whatsapp');
  console.log('Connected to MongoDB');
}

let allChats =[
  {
  from:'Aman',
  to:'Anjani',
  message:'aman says  Anjani hello',
  createdAt:new Date(),
},
{
  from:'Ankit1',
  to:'Anjani',
  message:'ankit1 says Hello Anjani',
  createdAt:new Date(),
},
{
  from:'Ankit2',
  to:'Anjani',
  message:'ankit2 says Hello Anjani',
  createdAt:new Date(),
},

{
  from:'Ankit3',
  to:'Anjani',
  message:'ankit3 says Hello Anjani',
  createdAt:new Date(),
},
{
  from:'Ankit4',
  to:'Anjani',
  message:'ankit4 says Hello Anjani',
  createdAt:new Date(),
}

];
Chat.insertMany(allChats);
