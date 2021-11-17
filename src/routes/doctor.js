const express = require('express');
const router = express.Router();

const doctorcontroller = require('../controllers/DoctorController');

router.use('/detail', doctorcontroller.detail);
router.use('/filter', doctorcontroller.detail);

router.use('/', doctorcontroller.index);
// router.get('/', (req, res, next) => {
//     res.render('user/doctor');
// });

module.exports = router; 