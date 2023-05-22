const postMessage = require('../service/postMessage')

module.exports = async (req, res) => {
  try {
    const { message, name } = req.body;

    if (!message || !name) {
      return res.status(400).json({ error: 'Message and name are required.' });
    }

    const result = await postMessage(message, name) ;
    return res.status(201).json({ message: 'Message posted successfully.' });
  } 
  catch (error) {
    console.error('Error inserting message:', error);
    return res.status(500).json({ error: 'Failed to insert message.' });
  }
};