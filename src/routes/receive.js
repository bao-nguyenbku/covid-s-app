const express = require('express');
const router = express.Router();
const receiveController = require('../controllers/ReceiveController');
const acceptController = require('../controllers/AcceptController');
const auth = require('../controllers/AuthenticateUser');
router.get('/', auth(['V']), receiveController.show);

router.post('/confirm', auth(['V']), receiveController.confirm);

router.get('/accept', auth(['V']), acceptController.show);

router.post('/accept', auth(['V']), acceptController.confirmDoneOrder);

router.post('/accept/check-list', auth(['V']), acceptController.checkList);

router.post('/accept/details', auth(['V']), acceptController.showDetail);



module.exports = router;