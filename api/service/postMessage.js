const {db} = require('../db');
const query = 'INSERT INTO messages (message, name) VALUES (?, ?)';

module.exports = (message, name) => {
    return new Promise((resolve, reject) => {
        db.query(query, [message, name], (err, results) => {
          if (err) {
            console.error('Error inserting message:', err);
            reject({ error: 'Failed to insert message.' });
          } else {
            resolve(results);
          }
        });
      });
  
}