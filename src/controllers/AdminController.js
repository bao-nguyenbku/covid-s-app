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
        let sql2 = "select count(`order`.id) as numOfOrders, `order`.order_status, volunteer.account_id from `order`, volunteer where `order`.volunteer_id = volunteer.account_id group by `order`.order_status, volunteer.account_id";
        db.query(sql2, (err, orderDone) => {
            if (err) throw err;
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


/**
 * FETCH API
 */
exports.getSupportDoneData = (req, res, next) => {
    let sql = "select count(id) from `order`; select order_status, count(order_status) from `order` group by order_status;";
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result) {
            res.json({ data: result, code: 200 });
        }
        // console.log(result);
    });
}

exports.getSupportData = (req, res, next) => {
    const curr = new Date();
    let first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(curr.setDate(first));
    var lastday = new Date(curr.setDate(last));
    firstday = firstday.getFullYear() + '-'
        + (firstday.getMonth() + 1) + '-'
        + firstday.getDate();
    lastday = lastday.getFullYear() + '-'
        + (lastday.getMonth() + 1) + '-'
        + lastday.getDate();

    let sql = "select count(id) as numOfOrders, `order`.order_status from `order` where `order`.create_time >= ? and `order`.create_time <= ? group by `order`.order_status";
    db.query(sql, [firstday, lastday], (err, rows) => {
        if (err) throw err;
        else {
            res.json({ data: rows });
        }
    });



    // res.json({ data: someVar });
}
exports.chartFilter = (req, res, next) => {
    const type = req.body.filter.split('=')[1];
    if (type == 'all') {
        let sql = "select count(id) from `order`; select order_status, count(order_status) from `order` group by order_status;";
        db.query(sql, (err, result) => {
            if (err) throw err;
            if (result) {
                res.json({ data: result, code: 200 });
            }
            // console.log(result);
        });
    }
    else if (type == 'month') {
        const day = new Date();
        const today = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + '01';
        let sql = "select count(id) from `order`; select order_status, count(order_status) from `order` where create_time >= ? group by order_status;";
        db.query(sql, [today], (err, result) => {
            if (err) throw err;
            res.json({ data: result, code: 200 });
        });
    }
    else if (type == 'week') {
        const curr = new Date();
        let first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        var firstday = new Date(curr.setDate(first));
        var lastday = new Date(curr.setDate(last));
        firstday = firstday.getFullYear() + '-'
            + (firstday.getMonth() + 1) + '-'
            + firstday.getDate();
        lastday = lastday.getFullYear() + '-'
            + (lastday.getMonth() + 1) + '-'
            + lastday.getDate();

        let sql = "select count(id) from `order`; select order_status, count(order_status) from `order` where create_time >= ? and create_time <= ? group by order_status;";
        db.query(sql, [firstday, lastday], (err, result) => {
            if (err) throw err;
            res.json({ data: result, code: 200 });
        });
    }

}