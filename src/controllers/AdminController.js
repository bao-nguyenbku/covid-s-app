const db = require('../config/db/DBconnection');

exports.dashboard = (req, res, next) => {
    let sql = "SELECT *, `order`.id as order_id, `order`.create_time as order_create FROM `order`, `account` WHERE `order`.`customer_id` = `account`.`id`; select count(id) as numOrders from `order`; select count(account_id) as numCus from customer; select count(account_id) as numVol from volunteer;";
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            // res.json(result);
            res.render('admin/dashboard', {
                layout: 'admin',
                orders: result[0],
                summary1: result[1][0],
                summary2: result[2][0],
                summary3: result[3][0]
            });
}
    });
}

exports.member = (req, res, next) => {
    let sql = "select * from volunteer, `account` where account_id = id";
    db.query(sql, (err, result) => {
        if (err) throw err;
        // res.json(result);
        let sql2 = "select count(`order`.id), `order`.order_status from `order`, volunteer where `order`.volunteer_id = volunteer.account_id group by `order`.order_status";
        db.query(sql2, (err, orderDone) => {
            if (err) throw err;
            // res.json(orderDone);
            res.render('admin/member', { layout: 'admin', data: result, orders: orderDone });
        });
    });
}

exports.memberAccept = (req, res, next) => {
    const id = req.body.id;
    let sql = "update volunteer set accept = ? where account_id = ?";
    db.query(sql, ['T', id], (err, result) => {
        if (err) throw err;
        res.json({ status: 200 });
    }); 

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
            res.json({ data: result, code: 200 });
        }
        // console.log(result);
    });
}