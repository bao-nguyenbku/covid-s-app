const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.get('/feedback', HomeController.feedback);
router.get('/', HomeController.show);



module.exports = router;