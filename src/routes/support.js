const express = require('express');
const router = express.Router();
const SupportController = require('../controllers/SupportController');

router.get('/', SupportController.show);

router.post('/create', SupportController.create);

module.exports = router;