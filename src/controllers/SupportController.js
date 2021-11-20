const mysql = require('mysql');
const db = require('../config/db/DBconnection');

exports.show = (req, res, next) => {
    res.render('user/support');
}
exports.create = (req, res, next) => {
    const today = new Date();
    let createTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    db.query('SELECT id FROM account WHERE phone_number = ?', [req.session.user.phone_number], (err, customer_id) => {

        if (err) throw err;
        if (customer_id) {
            const cusId = customer_id[0]["id"];
            let sql_order = 'INSERT INTO `order` (create_time, address, customer_id)  VALUES (?, ?, ?)';
            db.query(sql_order, [createTime, req.body.address, cusId], (err, result) => {
                if (err) throw err;
                if (result) {
                    const orderId = result.insertId;
                    for (i = 0; i < req.body.itemName.length; i++) {
                        const item_name = req.body.itemName[i];
                        const item_quantity = req.body.quantity[i];
                        const item_note = req.body.note[i];

                        let sql_order_item = 'INSERT INTO `order_item` (order_id, item_name, quantity, note)  VALUES (?, ?, ?, ?)';
                        db.query(sql_order_item, [orderId, item_name, item_quantity, item_note], (err, rows) => {
                            if (err) throw err; 
                        });
                    }
                    res.redirect('/support');  
                }
            });
        }
    });
    
}
