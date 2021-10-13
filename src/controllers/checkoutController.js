const mysql = require('mysql');
const db = require('../config/db/DBconnection');

exports.showCheck = (req, res, next) => {
    // const cart = Cart.getCart();
    // res.render('cart', { cart });
    res.render('checkout');
}
