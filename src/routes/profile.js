const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
router.get('/', UserController.showProfile);

router.post('/', UserController.updateProfile);
router.post('/update-avatar', UserController.updateAvatar);
router.post('/delete-address', UserController.deleteAddress);
module.exports = router;