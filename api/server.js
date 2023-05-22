const express = require('express')
const dotenv = require('dotenv')
const app = require('./app')
const {connect} = require('./db')

dotenv.config({ path: './config.env' });

//If not defined default app port is 9000
const port = process.env.PORT || 9000;
app.listen(port, async () => {
    console.log(`Server is runnuing at port ${port}`)
    await connect();
})