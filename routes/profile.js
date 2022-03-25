const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const auth = require('../controllers/AuthenticateUser');
router.get('/', auth(['V', 'C']), UserController.showProfile);

router.post('/', auth(['V', 'C']), UserController.updateProfile);
router.post('/update-avatar', auth(['V', 'C']), UserController.updateAvatar);
router.post('/delete-address', auth(['V', 'C']), UserController.deleteAddress);
module.exports = router;