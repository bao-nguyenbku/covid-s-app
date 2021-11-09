const mysql = require('mysql');
const config = require('../config.json');
// const util = require('util');

/**
 * Create database connection infomation
 */
const db = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});
/**
 * Get connecting from created connection above (db)
 */
db.getConnection((err) => {
    if (err) throw err;
    else console.log('Database is connected');
});

// db.query = util.promisify(db.query);

/**
 * Export this as module for others file
 */
module.exports = db;
