import React, {useState,useEffect} from 'react';
import axios from 'axios';

const WelcomePage = ({onLeaveMessageClick, API_URL}) => {
    const [messages, setMessages] = useState([]);

    //fetching messages from server for inital screen
    useEffect(() => {
        fetchMessages();
    }, [])

    const fetchMessages = async() => {
        //Communication with backend
        try{
            const response = await axios.get(`${API_URL}/messages`)
            setMessages(response.data)
        }
        catch(err){
            console.log('Error fetching messages', err)
        }
    };

  return (
    <div>
      <h1>Guestbook</h1>
      <p>See what people wrote about us and feel free to leave a message.</p>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.name}:</strong> {msg.message}
          </li>
        ))}
      </ul>
      <button onClick={onLeaveMessageClick}>Leave a message</button>
    </div>
  );
}

export default WelcomePage;