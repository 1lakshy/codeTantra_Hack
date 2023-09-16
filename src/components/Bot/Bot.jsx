import React, { useState, useEffect } from 'react';
import { palmCreateChat } from 'palm-api';

const API_KEY = 'AIzaSyBAIGW2Yp__Oi2GJt0VdWVwjx1L93eT3bQ'; // Replace with your actual API key

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [chatInstance, setChatInstance] = useState(null);

  const sendMessage = async () => {
    if (userMessage.trim() === '') return;

    // Add user's message to chat history
    setChatHistory([...chatHistory, { text: userMessage, isUser: true }]);
    setUserMessage('');

    try {
      // Send user's message to the chatbot
      const response = await chatInstance.send(userMessage);

      // Add chatbot's response to chat history
      setChatHistory([...chatHistory, { text: response.text, isUser: false }]);
    } catch (error) {
      console.error('Error while chatting with the bot:', error);
    }
  };

  useEffect(() => {
    // Create a chat instance when the component mounts
    palmCreateChat(API_KEY).then((instance) => setChatInstance(instance));

    // Automatically send a welcome message when the component mounts
    sendMessage('Hello, chatbot!');
  }, []);

  return (
    <div>
      <div className="chat-window">
        {chatHistory.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
