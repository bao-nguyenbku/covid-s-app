const mysql = require('mysql');
const db = require('../config/db/DBconnection');


// exports.getDatabase = (req,res) => {
//     db.getConnection((err, connection) => {
//         if (err) throw err;
//         connection.query('SELECT * FROM doctor;', (err, result) => {
//             console.log(result);
//             return result;
//         });
//     });   
// }

const Doctor = function(doctor) {
    this.title = doctor.title;
    this.description = doctor.description;
    this.published = doctor.published;
  };


Doctor.getAll = (result) => {
    let query = "SELECT * FROM doctor;";

    db.query(query, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
        }
        result(null, res);
    });
};

Doctor.getElement = (id, result)=>{
    let query = "SELECT * FROM doctor WHERE id=" + id + ";";

    db.query(query, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
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
