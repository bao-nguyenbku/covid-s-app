const db = require('../config/db/DBconnection');

const Accept = function (accept) {
    this.title = accpet.title;
    this.description = accept.description;
    this.published = accept.published;
};
Accept.getAll = (result) => {
    let query = "SELECT order.create_time AS time, order.Quan as quan, order.address AS address,CONCAT(`last_name`,' ', `first_name`) AS `name` FROM `order` JOIN `account` ON order.customer_id = account.id WHERE order_status='Chờ giao hàng' ;";
    db.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
/*
Accept.get_list = (result)=>{
    db.query("SELECT order.create_time AS time, order.address AS address,CONCAT(`last_name`,' ', `first_name`) AS `name` FROM `order` JOIN `account` ON order.customer_id = account.id WHERE order_status='Chờ giao hàng' ;",(err,data)=>{
        if (err){
            console.log("error: ", err);
            result(null);
            return;
        }
        else
        console.log("data1: ", data[0]);
        result(data);
    });
  };
*/
module.exports = Accept;

