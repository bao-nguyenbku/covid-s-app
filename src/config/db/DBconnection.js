const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "baonguyen",
    password: "Thienbao4",
    database: "menus"
});

db.getConnection((err) => {
    if (err) throw err;
    else console.log('Database is connected');
});
module.exports = db;
