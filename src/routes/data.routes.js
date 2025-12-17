const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const dataController = require('../controllers/data.controller');

router.get('/data', authMiddleware, dataController.getData);

module.exports = router;
