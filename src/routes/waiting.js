const express = require('express');
const router = express.Router();
const waitingController = require('../controllers/WaitingController');
const auth = require('../controllers/AuthenticateUser');
// router.get('/edit/:id', waitingController.edit);
// router.get('/:id', waitingController.detail);
router.get('/', auth(['C']), waitingController.show);
router.post('/update-order',  auth(['C']), waitingController.update);
router.get('/update-order',  auth(['C']), waitingController.updateDetail);
//router.post('/update-order', waitingController.updateDetail);
router.post('/order-details',  auth(['C']), waitingController.showDetail);
router.get('/delete-order',  auth(['C']), waitingController.delete);

module.exports = router;   