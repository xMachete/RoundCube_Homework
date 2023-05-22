const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const postMessRout = require('./routes/postMessRoutes')
const fetchMessRout = require('./routes/fetchMessRoutes')


const app = express();

app.use(helmet())
app.use(morgan())

app.use(cors());
//Updated version of body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

// Posting message into database
app.use('/api/v1', postMessRout);

//Fetching messages from database
app.use('/api/v1', fetchMessRout );

//Catch invalid url
app.use('*', (req,res) => {
  res.send('Invalid url!', 404);
});

module.exports = app;