const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
router.get('/', AdminController.dashboard);

router.get('/member', AdminController.member);


module.exports = router;