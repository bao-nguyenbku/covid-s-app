const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    user = req.session.user;
    // res.json(user);
    if (user) {
        console.log(user);
        res.render('index', { user });
        return;
    }
    else {
        res.render('index');
    }
});

module.exports = router;