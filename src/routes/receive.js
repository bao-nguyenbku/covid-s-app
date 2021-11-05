const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('volunteer/receive');
});
router.get('/accept', (req, res, next) => {
    res.render('volunteer/accept');
});



module.exports = router;