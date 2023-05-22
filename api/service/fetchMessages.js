const {db} = require('../db')
const query = 'SELECT * FROM messages ORDER BY id DESC LIMIT 10';

module.exports = () => {
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
          if (err) {
            console.error('Error fetching messages:', err);
            reject({ error: 'Failed to fetch messages.' });
          } else {
            resolve(results);
          }
        });
      });
}