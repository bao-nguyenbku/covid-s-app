const express = require('express');
// const User = require('../models/user');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('register');
});

router.get('/volunteer', (req, res, next) => {
    res.render('volunteer/register');
});
router.post('/volunteer', UserController.volunteerRegistier);
// Post register data
router.post('/',UserController.register);
module.exports = router;