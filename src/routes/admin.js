const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const DoctorController = require('../controllers/DoctorController');
const auth = require('../controllers/AuthenticateUser');


router.get('/', /*auth('A'),*/ AdminController.dashboard);
router.post('/chart-filter', /*auth('A'),*/ AdminController.chartFilter);
router.get('/member', /*auth('A'),*/ AdminController.member);
router.post('/member/accept', /*auth('A'),*/ AdminController.memberAccept);


router.get('/doctor', /*auth('A'),*/ AdminController.showDoctor);
router.post('/doctor/add', /*auth('A'),*/ DoctorController.add);
router.get('/doctor/:id', /*auth('A'),*/ DoctorController.getDoctor);
router.post('/doctor/:id/edit', /*auth('A'),*/ DoctorController.update);
router.get('/doctor/:id/delete', /*auth('A'),*/ DoctorController.delete);


router.get('/member/api/support-done-chart', /*auth('A'),*/ AdminController.getSupportDoneData);
router.get('/member/api/support-chart', /*auth('A'),*/ AdminController.getSupportData);


module.exports = router;