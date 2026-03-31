const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');  
const Chat = require('./models/chat.js'); 
const methodOverride = require('method-override');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

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
  res.render("index.ejs",{chats});
});
  
//new chat route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create route
app.post("/chats", async (req, res) => {

  let { from, to, message } = req.body;

  let chat = new Chat({
    from,
    to,
    message,
    created_At: new Date(),
  });

  await chat.save();
  console.log(chat);

  res.send("saved");
});
  
//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;  
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat});
});

//update route

app.put("/chats/:id",  (req, res) => {
  let { id } = req.params;
  let { message,newmessage } = req.body;
  console.log(newmessage);
  let updatchat =  Chat.findByIdAndUpdate(id, { message ,newmessage}, { runValidators: true , new: true });

  console.log(updatchat);
  res.redirect("/chats");
});


app.get('/', (req, res) => {
  res.send('root is working');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
