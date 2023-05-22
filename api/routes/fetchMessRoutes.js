const express = require('express');
const router = express.Router();

const fetchMessController = require('../controllers/fetchMessController');

router.get('/messages', fetchMessController);


module.exports = router;