const fetchMessages = require('../service/fetchMessages')

module.exports = async (req, res) => {
    try {
      const results = await fetchMessages();
      return res.json(results);
    } 
    catch (error) {
      console.error('Error fetching messages:', error);
      return res.status(500).json({ error: 'Failed to fetch messages.' });
    }
  };