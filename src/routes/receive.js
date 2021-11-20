const express = require('express');
const router = express.Router();
const receiveController = require('../controllers/ReceiveController');

router.get('/', receiveController.show);

router.post('/confirm', receiveController.confirm);
router.get('/accept', (req, res, next) => {
    res.render('volunteer/accept');
});



module.exports = router;