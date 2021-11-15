const db = require('../config/db/DBconnection');

exports.dashboard = (req, res, next) => {
    res.render('admin/dashboard', { layout: 'admin' });
}