const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/DoctorController');

router.get('/detail', doctorController.detail);
router.post('/filter', doctorController.detail);

router.get('/', doctorController.show);

module.exports = router; 
