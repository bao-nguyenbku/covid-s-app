const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // res.json(user);
   res.render('index');
    
});

module.exports = router;