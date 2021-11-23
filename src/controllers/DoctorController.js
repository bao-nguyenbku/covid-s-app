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
    add = (req, res, next) => {
        const data = {
            phone: req.body.phone,
            des: req.body.des,
            name: req.body.name,
            exp: req.body.exp,
            major: req.body.major,
            supportZone: req.body.support_zone,
            work_hospital: req.body.work_hospital,
            image: null
        }
        if (req.files) {
            let uploadPath;
            const file = req.files.avatar;
            data.image = file.name;
            uploadPath = './src/public/upload/doctor/' + file.name;
            file.mv(uploadPath, (err) => {
                if (err) return res.status(500).send(err);
            });
        }
        if (data.image) {
            let sql1 = "insert into doctor (phone_number, descriptions, name, experience, major, support_zone, work_hospital, image) values (?, ?, ?, ?, ?, ?, ?, ?)";
            db.query(sql1, [data.phone, data.des, data.name, `${data.exp} năm kinh nghiệm`, data.major, data.supportZone, data.work_hospital, data.image], (err, result) => {
                if (err) throw err;
                res.redirect('/admin/doctor');
            });
        }
        else {
            let sql1 = "insert into doctor (phone_number, descriptions, name, experience, major, support_zone, work_hospital) values (?, ?, ?, ?, ?, ?, ?)";
            db.query(sql1, [data.phone, data.des, data.name, data.exp, data.major, data.supportZone, data.work_hospital], (err, result) => {
                if (err) throw err;
                res.redirect('/admin/doctor');
            });
        }
        
    }
}

module.exports = new DoctorController;

