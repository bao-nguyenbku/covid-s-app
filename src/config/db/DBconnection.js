const mysql = require('mysql');
// const util = require('util');
const db = mysql.createPool({
    host: "localhost",
    user: "baonguyen",
    password: "Thienbao4",
    database: "covid_support_app"
});

db.getConnection((err) => {
    if (err) throw err;
    else console.log('Database is connected');
});

// db.query = util.promisify(db.query);
module.exports = db;
