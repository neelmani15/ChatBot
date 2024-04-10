// ChatBot.js
import React, { useState,useEffect, useRef } from 'react';
import axios from 'axios';
import Heading from './Heading';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../Styles/ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      const newMessage = { text: inputValue, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputValue('');
  
      try {
        const response = await axios.post('https://chat-bot-backend-two.vercel.app/chat', { prompt: inputValue });
        const botResponse = response.data;
        console.log(botResponse);
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } catch (error) {
        console.error('Error fetching response from backend:', error);
      }
    }
  };

  return (
    <div>
        <Heading />
        <div className="max-w-4xl mx-auto my-20 p-4 border rounded-lg bg-gray-300 main1-div">
        <div ref={messageContainerRef} className="overflow-y-auto box-div" style={{ height: '56vh',overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#718096 #EDF2F7' }}>
            {messages.map((message, index) => (
            <div key={index} className={`p-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                {message.sender === 'user' ? (
                    <span className="bg-green-600 rounded-lg p-1 text-white">{message.text}</span>
                ) : (
                    <p className="bg-gray-600 rounded-lg p-1 text-justify text-white">{message.text}</p>
                )}
                </div>
            ))}
        </div>
        <div className="mt-4 flex input-div">
            <input
            type="text"
            className="flex-1 border p-2 rounded-l-lg input-field"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                handleSendMessage();
                }
            }}
            />
            <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
            onClick={handleSendMessage}
            >
            Send
            </button>
        </div>
        </div>
        <div className="absolute bottom-10 right-20 icon1-div">
            <Link to="/">
                <div className="bg-blue-500 rounded-full p-2">
                    <FaHome size={32} color="white" />
                </div>
            </Link>
        </div>
    </div>
  );
};

export default ChatBot;
