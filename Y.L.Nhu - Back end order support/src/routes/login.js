const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', (req, res, next) => {
    res.render('login');
});

// Post login data
router.post('/', UserController.login);

module.exports = router;