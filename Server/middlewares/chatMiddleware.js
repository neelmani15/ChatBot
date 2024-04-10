const axios = require('axios');

let conversationHistory = [
    {role:"assistant",content:"I am assistant. How Can I help you ?"},
];

const ChatResponse = async (req,res) =>{
    try{
        const {prompt} = req.body;
        conversationHistory.push({role:"user",content:prompt})
        const reqBody = {
            "model":"gpt-3.5-turbo",
            "messages":conversationHistory,
            "temperature":1
        }
        const header={
            "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        }
        const response = await axios.post(process.env.OPENAI_API,reqBody,{headers:header});
        const chatdata = response.data.choices[0].message.content;
        res.send(chatdata);
    }catch(err){
        console.log(err);
        res.send(500).json({error:'Not able to fetch data using Openai'})
    }
};

module.exports = ChatResponse;