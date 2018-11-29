const express = require('express');
const router = express.Router();
const { sendInsights } = require('../controllers/insights')

router.get('/insights/:topic', sendInsights);

module.exports = router;