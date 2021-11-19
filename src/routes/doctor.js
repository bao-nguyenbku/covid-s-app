const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
     res.render('user/doctor');
 });

module.exports = router; 