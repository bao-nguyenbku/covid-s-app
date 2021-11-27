const express = require('express');
const router = express.Router();
const auth = require('../controllers/AuthenticateUser');

const doctorController = require('../controllers/DoctorController');

router.get('/detail', auth(['V', 'C', 'A']), doctorController.detail);
router.post('/filter', auth(['V', 'C', 'A']), doctorController.detail);

router.get('/', auth(['V', 'C', 'A']), doctorController.show);

module.exports = router; 
