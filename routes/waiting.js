const express = require('express');
const router = express.Router();
const waitingController = require('../controllers/WaitingController');
const auth = require('../controllers/AuthenticateUser');

router.get('/', auth(['C']), waitingController.show);
router.post('/update-order',  auth(['C']), waitingController.update);
router.get('/update-order',  auth(['C']), waitingController.updateDetail);

router.post('/order-details',  auth(['C']), waitingController.showDetail);
router.get('/delete-order',  auth(['C']), waitingController.delete);
router.post('/feedback',  auth(['C']), waitingController.feedback);

module.exports = router;   