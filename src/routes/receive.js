const express = require('express');
const router = express.Router();

const acceptcontroller = require('../controllers/AcceptController');

router.use('/accept',acceptcontroller.index);
router.use('/list',acceptcontroller.get_list);
router.use('/detail:id',acceptcontroller.get_detail);
router.get('/', (req, res, next) => {
    res.render('volunteer/receive');
});
/*
router.get('/accept', (req, res, next) => {
    res.render('volunteer/accept');
});*/

module.exports = router;