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


//index route

app.get("/chats",  async(req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.send("working");
});
  


app.get('/', (req, res) => {
  res.send('root is working');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
