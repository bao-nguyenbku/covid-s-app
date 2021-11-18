const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const auth = require('../controllers/AuthenticateUser');
router.get('/', /*auth('A'),*/ AdminController.dashboard);

router.get('/member', /*auth('A'),*/ AdminController.member);


module.exports = router;