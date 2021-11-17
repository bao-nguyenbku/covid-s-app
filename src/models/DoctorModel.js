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

Doctor.getFilter = (region, result) => {
    let query = "SELECT * FROM doctor WHERE support_zone = "+ region +";";

    db.query(query, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
        }
        result(null, res);
    });
};

module.exports = Doctor;
  
// Tutorial.findById = (id, result) => {
// sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
//     if (err) {
//     console.log("error: ", err);
//     result(err, null);
//     return;
//     }

//     if (res.length) {
//     console.log("found tutorial: ", res[0]);
//     result(null, res[0]);
//     return;
//     }

//     // not found Tutorial with the id
//     result({ kind: "not_found" }, null);
// });
// };