const express = require('express');
const router = express.Router();
const receiveController = require('../controllers/ReceiveController');
const acceptController = require('../controllers/AcceptController');
router.get('/', receiveController.show);

router.post('/confirm', receiveController.confirm);
router.get('/accept', acceptController.index);



module.exports = router;