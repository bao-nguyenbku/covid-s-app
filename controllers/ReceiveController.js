const db = require('../config/db/DBconnection');

exports.show = (req, res, next) => {
    let sql = "select last_name, first_name, `order`.address, `order`.create_time, `order`.volunteer_id, `order`.id as order_id from `order`, `account` where `order`.customer_id = `account`.id";
    db.query(sql, (err, result) => {
        if (err) throw err;
        //TODO: query to get customer id
        // res.json(result);
        res.render('volunteer/receive', { result });
    });

}

exports.confirm = (req, res, next) => {
    let sql = "select id from `account` where phone_number = ? and role = ?;";
    const today = new Date();
    let receiveTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    db.query(sql, [req.session.user.phone_number, 'V'], (err, volunteerId) => {
        if (err) throw err;
        if (volunteerId.length > 0) {

            const volId = volunteerId[0].id;
            const orderId = req.body.id;
            console.log(volId);
            sql = "update `order` set order_status = 'Chờ giao hàng', volunteer_id = ?, receive_time = ? where `order`.id = ?;";
            db.query(sql, [volId, receiveTime, orderId], (err, result) => {
                if (err) throw err;
                res.json(200);
            });
        }
    });


}
exports.feedback = (req, res, next) => {
    let sql = "select id from `account` where phone_number = ? and role = ?;";
    const today = new Date();
    let receiveTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    db.query(sql, [req.session.user.phone_number, 'V'], (err, volunteerId) => {
        if (err) throw err;
        if (volunteerId.length > 0) {
            const volId = volunteerId[0].id;
            const orderId = req.body.id;
            let sql1 = "SELECT * FROM `feedback` where fbcheck='Y' and volunteer_id = ?;";
            db.query(sql1, [volId], (err, re) => {
                res.render('volunteer/feedback', { feedback: re });
            });
        }
    });

}
