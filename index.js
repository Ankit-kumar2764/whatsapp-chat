const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');  
const Chat = require('./models/chat.js'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

main().then(() => {
  console.log('connection successfull');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Whatsapp');
  console.log('Connected to MongoDB');
}

let chat1=new Chat({
  from:'Ankit',
  to:'Anjani',
  message:'Hello Anjani',
  createdAt:new Date(),
});

chat1.save().then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.error('Error saving chat:', err);
});

app.get('/', (req, res) => {
  res.send('root is working');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
