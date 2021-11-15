
const Doctor = require('../models/DoctorModel');
// const Helper = require('./Helper');
class DoctorController{
    index = (req, res)=>{
        Doctor.getAll((err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message
              });
            else res.render('user/doctor',{data});
        });
    }
}

module.exports = new DoctorController;
