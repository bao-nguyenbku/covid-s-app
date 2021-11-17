const db = require('../config/db/DBconnection');
// constructor
const Item = new Object();

Item.findById = (id, result) => {
    db.query("SELECT * FROM item WHERE idOrder = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found item id: ", res);
            result(null, res);
            return;
        }

        // not found Item with the id
        result({ kind: "not_found" }, null);
    });
};

Item.getAll = (title, result) => {
    let query = "SELECT * FROM item";

    if (title) {
        query += ` WHERE title LIKE '%${title}%'`;
    }

    db.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("items: ", res);
        result(null, res);
    });
};

module.exports = Item;