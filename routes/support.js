const express = require('express');
const router = express.Router();
const SupportController = require('../controllers/SupportController');
const auth = require('../controllers/AuthenticateUser');

router.get('/', auth(['C']), SupportController.show);

router.post('/create', auth(['C']), SupportController.create);

module.exports = router;