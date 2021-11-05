// const mysql = require('mysql');
// const db = require('../config/db/DBconnection');
// const Cart = require('../models/Cart');
// const Helper = require('./Helper');
// exports.show = (req, res) => {
//     db.getConnection((err, connection) => {
//         if (err) throw err;
//         connection.query('SELECT * FROM foods', (err, result) => {
//             connection.release();
//             res.render('products', { result });
//         });
//     });   
// }
// var myCart;
// exports.addToCart = (req, res) => {
//     db.getConnection((err, connection) => {
//         if (err) throw err;
//         connection.query('SELECT * FROM foods WHERE id = ?', [req.body.id], (err, result) => {
//             connection.release();
//             if (req.session.cart) {
//                 const oldCart = req.session.cart;
//                 myCart = Helper.Assign(oldCart);
//                 myCart.save(result[0]);
//                 req.session.cart = myCart;
//             }
//             else {
//                 myCart = new Cart();
//                 myCart.save(result[0]);
//                 req.session.cart = myCart;
//             }
//             res.redirect('/products');
//         });
//     });
// }