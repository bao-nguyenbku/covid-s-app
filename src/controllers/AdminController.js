const db = require('../config/db/DBconnection');

exports.dashboard = (req, res, next) => {
    let sql = "SELECT *, `order`.id as order_id, `order`.create_time as order_create FROM `order`, `account` WHERE `order`.`customer_id` = `account`.`id`;";
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            // res.json(result);
            res.render('admin/dashboard', { layout: 'admin', orders: result });
        }
    });
}

exports.member = (req, res, next) => {
    res.render('admin/member', { layout: 'admin' });
}
exports.showDoctor = (req, res, next) => {
    let sql = "select * from doctor;";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('admin/doctorStore', { layout: 'admin', result });
    });
}
// API
exports.getSupportData = (req, res, next) => {
    let sql = "select count(id) from `order`; select order_status, count(order_status) from `order` group by order_status;";
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result) {
            res.json({data: result, code: 200});
        }
        // console.log(result);
    });
}