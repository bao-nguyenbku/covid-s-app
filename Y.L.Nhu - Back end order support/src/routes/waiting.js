const express = require('express');
const router = express.Router();
const waitingController = require('../controllers/WaitingController');
// router.get('/edit/:id', waitingController.edit);
// router.get('/:id', waitingController.detail);
router.get('/', waitingController.show);
router.post('/order-details', waitingController.showDetail);


module.exports = router;