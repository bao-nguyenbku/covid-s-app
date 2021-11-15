const Cart = require('../models/Cart');
const Helper = require('./Helper');
exports.showCart = (req, res, next) => {
    const cart = req.session.cart;
    
    res.render('cart', { cart });
}
exports.updateCart = (req, res, next) => {
    const params = req.body.id.split('/');
    const productID = parseInt(params[1]);
    const quantity = parseInt(params[0]);
    const oldCart = req.session.cart;
    const newCart = Helper.Assign(oldCart);

    newCart.update(productID, quantity);
    req.session.cart = newCart;
    
    const cart = req.session.cart;
    res.render('cart', { cart });
}