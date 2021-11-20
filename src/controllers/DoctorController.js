const db = require('../config/db/DBconnection');

const Doctor = require('../models/Doctor');
// const Helper = require('./Helper');
class DoctorController {
    show = (req, res) => {
        Doctor.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message
                });
            else {
                var string = JSON.stringify(data);
                data = JSON.parse(string);
                // res.json(data);
                res.render('user/doctor', { data });
            }
        });
    }
    detail = (req, res) => {
        var request = req.query.ID;
        Doctor.getById(request, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }
            else {
                var string = JSON.stringify(data);
                data = JSON.parse(string);
                res.send(data[0]);
            }
        });
    }
}

module.exports = new DoctorController;

