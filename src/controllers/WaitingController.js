const mysql = require('mysql');
const db = require('../config/db/DBconnection');
const Order = require('../models/Order');
const Item = require('../models/Item');


exports.show = (req, res, next) => {
    let sql = "SELECT * FROM `order`; SELECT * FROM order_item;";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('user/waiting', { orders: result[0], items: result[1] });
    });
}
exports.showDetail = (req, res, next) => {
    // let sql = "SELECT * FROM `order`, order_item WHERE `order`.id = ? AND `order`.id = order_item.order_id;";
    let sql = "SELECT * FROM `order` WHERE id = ?; SELECT * FROM order_item WHERE order_id = ?";
    db.query(sql, [req.body.id, req.body.id], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            
            if (result[0][0].volunteer_id) {
                sql = "select * from `account` where id = ?";
                db.query(sql, [result[0][0].volunteer_id], (err, re) => {
                    if (err) throw err;
                    res.json({ orders: result[0], order_items: result[1], volunteer: re});
                });
            }
            else {
                res.json({ orders: result[0], order_items: result[1] });
            }

        }
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