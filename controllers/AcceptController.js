//const { Result } = require('express-validator');
//const Accept = require('../models/Accept');
const db = require('../config/db/DBconnection');

exports.checkList = (req, res, next) => {
  const id = req.body.id;
  const item = {
    item_name: req.body.item.split(':')[0].trim(),
    quantity: req.body.item.split(':')[1].trim()
  }
    ;
  // res.json(item);
  let sql = "update order_item set `status` = ? where order_id = ? and item_name = ? and quantity = ?";
  db.query(sql, ['T', id, item.item_name, item.quantity], (err, result) => {
    if (err) throw err;
    res.json({ status: 200 });
  });
}

exports.show = (req, res, next) => {
  if (req.session.user) {
    let sql = "select id from account where phone_number = ?";
    db.query(sql, [req.session.user.phone_number], (err, re) => {
      if (err) throw err;
      const id = re[0].id;
      let sql2 = "SELECT `order`.create_time AS time, `order`.order_status, `order`.id as ID, `order`.district as quan, `order`.address as address, CONCAT(`last_name`,' ', `first_name`) AS `name` FROM `order` JOIN `account` ON `order`.customer_id = account.id where volunteer_id = ?;";
      db.query(sql2, [id], (err, orders) => {
        if (err) throw err;
        if (orders.length > 0) {
          let sql3 = "select * from order_item;";
          db.query(sql3, (err, result) => {
            // res.json(result);
            if (err) throw err;
            res.render('volunteer/accept', { orders: orders, items: result });
          });
        }
        else {
          res.render('volunteer/accept', { orders: null, items: null });
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
      sql = "select * from `account` where id = ?";
      db.query(sql, [result[0][0].customer_id], (err, re) => {
        if (err) throw err;
        res.json({ orders: result[0], order_items: result[1], customer: re });
      });
    }
  });
}
exports.confirmDoneOrder = (req, res, next) => {
  const id = req.body.data.id;
  const cost = req.body.data.cost;
  // res.json({ status: 200 });
  let sql = "update `order` set order_status = ?, cost = ? where `order`.id = ?";
  db.query(sql, ['Đã hoàn thành', cost, id], (err, result) => {
    if (err) throw err;
    res.json({ status: 200 });
  });
}
