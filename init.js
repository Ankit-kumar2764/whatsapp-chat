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
  from:'Ankit',
  to:'Anjani',
  message:'Ankit says  Anjani hello',
  created_At:new Date(),
},
{
  from:'Ankit1',
  to:'Anjani',
  message:'ankit1 says Hello Anjani',
  created_At:new Date(),
},
{
  from:'Ankit2',
  to:'Anjani',
  message:'ankit2 says Hello Anjani',
  created_At:new Date(),
},

{
  from:'Ankit3',
  to:'Anjani',
  message:'ankit3 says Hello Anjani',
  created_At:new Date(),
},
{
  from:'Ankit4',
  to:'Anjani',
  message:'ankit4 says Hello Anjani',
  created_At:new Date(),
}

];

