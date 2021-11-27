const db = require('../config/db/DBconnection');

exports.show = (req, res, next) => {
    db.query('SELECT id FROM account WHERE phone_number = ?', [req.session.user.phone_number], (err, customer_id) => {

        if (err) throw err;
        else if (customer_id)
        {
            const cusId = customer_id[0].id;
            // console.log(customer_id[0].id);
            let sql_choose_address = 'SELECT address FROM account_address WHERE account_id = ?';
            db.query(sql_choose_address, [cusId], (err, rows) => {
                if (err) throw err; 
                else{
                    // console.log(rows);
                    res.render('user/support', {rows});
                }
            });
        }
    
    });
    return;
}
exports.create = (req, res, next) => {

    const today = new Date();
    let createTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    db.query('SELECT id FROM account WHERE phone_number = ?', [req.session.user.phone_number], (err, customer_id) => {
        if (err) throw err;
        if (customer_id) {
            const cusId = customer_id[0]["id"];
            const address = {
                userDefined: req.body.address,
                userChoose: req.body.addressChoose,
                addressInput: null
            }
            if(!address.userDefined){
                address.addressInput = req.body.addressChoose;
            }
            else{
                address.addressInput = req.body.address;
            }
            const curAddress = address.addressInput;
            const district = curAddress.split(',');
            console.log();
            let sql_order = "INSERT INTO `order` (create_time, address, order_status, customer_id, district)  VALUES (?, ?,'Chờ tiếp nhận', ?, ?)";
            db.query(sql_order, [createTime, address.addressInput, cusId, district[district.length - 2].trim()], (err, result) => {
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
