const mysql = require('mysql');
const config = require('../config.json');

/**
 * Create database connection infomation
 */
var db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port,
    multipleStatements: true
});
/**
 * Get connecting from created connection above (db)
 */
db.connect((err) => {
    if (err) throw err;
    else {
        console.log("Database is connected");
    }
});


/**
 * Export this as module for others file
 */
module.exports = db;
