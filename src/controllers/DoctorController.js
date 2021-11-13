const mysql = require('mysql');
const db = require('../config/db/DBconnection');
const Doctor = require('../models/Doctor');
// const Helper = require('./Helper');

class DoctorController{
    index(req, res){
        res.render('user/doctor');
    }
}

module.exports = new DoctorController;


