const express = require('express');
const pamController = require('../controllers/pamController');
const router = express.Router();

router.get('/api/getPams', pamController.getPams);

module.exports = router;