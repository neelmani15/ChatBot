const express = require('express');
const ChatResponse = require('../middlewares/chatMiddleware.js');

const router = express();

router.route('/').post(ChatResponse);

module.exports = router;