// const mysql = require('mysql');
const db = require('../config/db/DBconnection');
// const Order = require('../models/Order');
// const Item = require('../models/Item');


exports.show = (req, res, next) => {
    if (req.session.user) {
        let sql = "select id from account where phone_number = ?";
        db.query(sql, [req.session.user.phone_number], (err, re) => {
            if (err) throw err;
            const id = re[0].id;
            let sql2 = "SELECT * FROM `order` where customer_id = ? and id not in (SELECT order_id from feedback);";
            db.query(sql2, [id], (err, orders) => {
                if (err) throw err;
                if (orders.length > 0) {
                    let sql3 = "select * from order_item;";
                    db.query(sql3, (err, result) => {
                        // res.json(result);
                        if (err) throw err;
                        res.render('user/waiting', { orders: orders, items: result });
                    });
                }
                else {
                    res.render('user/waiting', { orders: null, items: null });
                }
            });
        });
    }
}
exports.showDetail = (req, res, next) => {
    let sql = "SELECT * FROM `order` WHERE id = ?; SELECT * FROM order_item WHERE order_id = ?";
    db.query(sql, [req.body.id, req.body.id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {

            if (result[0][0].volunteer_id) {
                sql = "select * from `account` where id = ?";
                db.query(sql, [result[0][0].volunteer_id], (err, re) => {
                    if (err) throw err;
                    res.json({ orders: result[0], order_items: result[1], volunteer: re });
                });
            }
            else {
                res.json({ orders: result[0], order_items: result[1] });
            }

        }
    });
}
exports.updateDetail = (req, res, next) => {
    let sql = "SELECT * FROM `order` WHERE id = ?; SELECT * FROM order_item WHERE order_id = ?";
    db.query(sql, [req.query.id, req.query.id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.render('user/order', { orders: result[0], order_items: result[1] });
        }
    });
}
exports.update = (req, res, next) => {
    if (req.body) {
        const today = new Date();
        let createTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        db.query('SELECT id FROM account WHERE phone_number = ?', [req.session.user.phone_number], (err, customer_id) => {
            if (err) throw err;
            if (customer_id) {
                const cusId = customer_id[0]["id"];
                let sql_update_order = 'UPDATE `order` SET `create_time`= ?,`address`= ? WHERE `id` = ?;';
                db.query(sql_update_order, [createTime, req.body.address, req.body.idOrder], (err, result) => {
                    if (err) throw err;
                    db.query("DELETE FROM `order_item` WHERE order_id = ?", req.body.idOrder);
                    for (i = 0; i < req.body.nameItems.length; i++) {
                        const item_name = req.body.nameItems[i];
                        const item_quantity = req.body.quantity[i];
                        const item_note = req.body.note[i];
                        let sql_order_item = 'INSERT INTO `order_item` (order_id, item_name, quantity, note)  VALUES (?, ?, ?, ?)';
                        db.query(sql_order_item, [req.body.idOrder, item_name, item_quantity, item_note], (err, rows) => {
                            if (err) throw err;
                        });
                    }
                    res.redirect('/waiting');
                });
            }
        });
    }
}
exports.delete = (req, res, next) => {
    let sql = "DELETE FROM `order` WHERE id = ?; DELETE FROM `order_item` WHERE order_id = ?";
    db.query(sql, [req.query.id, req.query.id], (err, result) => {
        if (err) throw err;
        res.redirect('/waiting');
    });
}
exports.feedback = (req, res, next) => {
    const today = new Date();
    let createTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let sql = "INSERT INTO `feedback` (`order_id`, `customer_id`, `volunteer_id`, `feedback_time`, `feedback`, `fbcheck`) VALUES (?,?,?,?,?,'T')"
    db.query(sql, [req.query.id,req.query.cus, req.query.vol,createTime, req.body.feedback], (err, result) => {
        if (err) throw err;
        res.redirect('/waiting');
    });
}
// class WaitingController {
//     show(req, res, next) {
//         res.send("SHOW  - " + req.params.id);
//         let sql = "SELECT * FROM `order`";
//         let query = db.query(sql, (err, rows) => {
//             if (err) throw err;
//             else res.send("SHOW  - ABC" + req.params.id);

//         });
//     }    

//     // Create and Save a new Tutorial
//     create = (req, res) => {

//         // Create a Tutorial
//         const tutorial = new Order({
//             title: req.body.title,
//             description: req.body.description,
//             published: req.body.published || false
//         });

//         // Save Tutorial in the database
//         Order.create(tutorial, (err, data) => {
//             if (err)
//                 res.status(500).send({
//                     message:
//                         err.message || "Some error occurred while creating the Tutorial."
//                 });
//             else res.send(data);
//         });
//     };

//     index = (req, res) => {
        // const title = req.query.title;

        // Order.getAll(title, (err, data) => {
        //     if (err)
        //         res.status(500).send({
        //             message:
        //                 err.message || "Some error occurred while retrieving tutorials."
        //         });
        //     /* else res.send(data); */
        //     else {
        //         res.render('user/waiting', {
        //             data
        //         });

//         //     }
//         // });
//         // let sql = "SELECT * FROM `order`, order_item WHERE `order`.id = order_item.order_id;";
//         // db.query(sql, (err, result) => {


//         // }

//         let sql = "SELECT * FROM `order`;";
//         db.query(sql, (err, result) => {
//             for (let i = 0; i < result.length; i++) {
//                 sql = "SELECT * FROM order_item WHERE order_id = ?";
//                 db.query(sql, result[i]['id'], (err, re) => {
//                     result[i]['order_item'] = re;
//                     Output(result);
//                 });
//             }
//             res.json(output);
//         });

//     };

//     detail(req, res, next) {
//         //const title = req.query.title;
//         Order.findById(req.params.id, (err, data) => {
//             if (err) {
//                 if (err.kind === "not_found") {
//                     res.status(404).send({
//                         message: 'Not found Tutorial with id ${req.params.id}.'
//                     });
//                 } else {
//                     res.status(500).send({
//                         message: "Error retrieving Tutorial with id " + req.params.id
//                     });
//                 }
//             }
//             else /* res.send(data); */ {
//                 Item.findById(req.params.id, (err, items) => {
//                     if (err) {
//                         if (err.kind === "not_found") {
//                             res.render('order/detail', {
//                                 data, items
//                             });
//                         } else {
//                             res.status(500).send({
//                                 message: "Error retrieving Tutorial with id " + req.params.id
//                             });
//                         }
//                     }
//                     /* else res.send(items); */
//                     else {
//                         res.render('order/detail', {
//                             data, items
//                         });

//                     }
//                 });
//             }
//         });

//     }

//     edit(req, res, next) {
//         res.send("EDIT DETAIL")
//     }
// }

// module.exports = new WaitingController;