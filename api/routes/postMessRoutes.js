const express = require('express');
const router = express.Router();

const postMessController = require('../controllers/postMessController');

router.post('/message', postMessController);


module.exports = router;