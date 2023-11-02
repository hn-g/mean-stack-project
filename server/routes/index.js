// server/routes/index.js

const express = require('express');
const router = express.Router();
const server = require('../server');

router.use('/', server);

module.exports = router;
