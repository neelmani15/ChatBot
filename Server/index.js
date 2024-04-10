const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const chatroutes = require('./routes/chatRoutes.js');

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello, Welcome to ChatBot using Openai");
});

app.use('/chat',chatroutes);

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})