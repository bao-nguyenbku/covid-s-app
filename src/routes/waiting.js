const express = require('express');
const router = express.Router();
const waitingController = require('../controllers/WaitingController');

//router.get("/findAll", waitingController.findAll);
router.get('/edit/:id', waitingController.edit);
router.get('/:id', waitingController.detail);
router.get('/', waitingController.index);


module.exports = router;