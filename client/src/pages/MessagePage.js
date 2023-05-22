import React, { useState } from 'react';
import axios from 'axios';

const MessagePage = ({API_URL}) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [postStatus, setPostStatus] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!message || !name) return;

    setPostStatus('sending');

    //Communication with backend
    try {
      await axios.post(`${API_URL}/message`, { message, name });
      setPostStatus('success');
      setMessage('');
      setName('');
    } catch (error) {
      console.error('Error posting message:', error);
      setPostStatus('failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" disabled={postStatus === 'sending' || postStatus === 'success'}>
          {'Post'}
        </button>
        {postStatus === 'sending' && <p>Sending...</p>}
        {postStatus === 'success' && <p>Message posted.</p>}
        {postStatus === 'failed' && <p>Failed to post message.</p>}
      </form>
    </div>
  );
}

export default MessagePage;