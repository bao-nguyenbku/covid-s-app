const mysql = require('mysql');
const db = require('../config/db/DBconnection');

const Doctor = function (doctor) {
    this.title = doctor.title;
    this.description = doctor.description;
    this.published = doctor.published;
};


Doctor.getAll = (result) => {
    let query = "SELECT * FROM doctor;";
    db.query(query, (err, res) => {
        if (err) {
            // console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

Doctor.getById = (id, result) => {
    let query = `SELECT * FROM doctor WHERE id = ${id}`;
    db.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
}

// Doctor.getFilter = (region, result) => {
//     let query = "SELECT * FROM doctor WHERE support_zone = "+ region +";";

//     db.query(query, (err, res) => {
//         if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//         }
//         result(null, res);
//     });
// };

module.exports = Doctor;

