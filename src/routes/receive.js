const express = require('express');
const router = express.Router();
const receiveController = require('../controllers/ReceiveController');
const acceptController = require('../controllers/AcceptController');
router.get('/', receiveController.show);

router.post('/confirm', receiveController.confirm);
router.get('/accept', acceptController.show);
router.post('/accept/details', acceptController.showDetail);



module.exports = router;