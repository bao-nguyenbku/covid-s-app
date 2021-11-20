const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const auth = require('../controllers/AuthenticateUser');
router.get('/', /*auth('A'),*/ AdminController.dashboard);

router.get('/member', /*auth('A'),*/ AdminController.member);
router.get('/doctor', /*auth('A'),*/ AdminController.showDoctor);

router.get('/member/api/support-done-chart', AdminController.getSupportData);

module.exports = router;