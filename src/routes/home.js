const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('List of menus');
    res.render('index');
});

module.exports = router;