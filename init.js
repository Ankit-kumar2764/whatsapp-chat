const mongoose = require('mongoose');
const Chat = require('./models/chat.js'); 

main().then(() => {
  console.log('connection successfull');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Whatsapp');
  console.log('Connected to MongoDB');
}
Chat.insertMany([{
  from:'Ankit',
  to:'Anjani',
  message:'Hello Anjani',
  createdAt:new Date(),
}]);