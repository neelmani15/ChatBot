import React from 'react';
import Heading from './Heading';
import Image from '../Image/images.jpg';
import { TbMessageChatbot } from "react-icons/tb";
import { Link } from 'react-router-dom';
import '../Styles/Main.css';

export default function Main() {
  return (
    <div>
    <Heading />
    <div className="flex justify-center pt-32 main-div">
        <div className="flex flex-row max-w-5xl mx-auto content-div">
            <img src={Image} alt="Chat Bot" className="max-w-md image" />
            <div className='flex-grow ml-36 para'>
                <p className='text-justify italic text-xl'>
                    Our AI ChatBot is an intelligent virtual assistant that can help you with a wide range of customer service inquiries and support needs. It is designed to provide quick and accurate responses to your questions, guide you through our website, and assist you in finding the information you need. With advanced natural language processing capabilities, our ChatBot can engage in human-like conversations to better understand your needs and provide personalized assistance. Whether you have product-related queries, need help with technical issues, or want to learn more about our services, our ChatBot is always available to help you 24/7.
                </p>
            </div>
        </div>
        <div className="absolute bottom-20 right-20 icon-div">
            <Link to="/chatbot">
                <div className="bg-blue-500 rounded-full p-2">
                    <TbMessageChatbot size={40} color="white" />
                </div>
            </Link>
        </div>
    </div>
</div>

  )
}
