/* const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('user/waiting');
});



module.exports = router;

 */
const express = require('express');
const router = express.Router();
const waitingController = require('../controllers/WaitingController');

//router.get("/findAll", waitingController.findAll);
router.get('/edit/:id', waitingController.edit);
router.get('/:id', waitingController.detail);
router.get('/', waitingController.index);


module.exports = router;