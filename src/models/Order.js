const db = require('../config/db/DBconnection');
// constructor
const Order = new Object();

Order.findById = (id, result) => {
    db.query("SELECT * FROM `order` WHERE idOrder = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found tutorial: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

Order.getAll = (title, result) => {
    let query = "SELECT * FROM `order`";

    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }

    db.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("orders: ", res);
        result(null, res);
    });
};

module.exports = Order;