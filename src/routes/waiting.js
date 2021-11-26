const express = require('express');
const router = express.Router();
const waitingController = require('../controllers/WaitingController');
// router.get('/edit/:id', waitingController.edit);
// router.get('/:id', waitingController.detail);
router.get('/', waitingController.show);
router.post('/update-order', waitingController.update);
router.get('/update-order', waitingController.updateDetail);
//router.post('/update-order', waitingController.updateDetail);
router.post('/order-details', waitingController.showDetail);
router.get('/delete-order', waitingController.delete);

module.exports = router;   