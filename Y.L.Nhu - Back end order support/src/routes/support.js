const express = require('express');
const router = express.Router();
const db = require('../config/db/DBconnection');

router.get('/', (req, res, next) => {
    res.render('user/support');
});


router.post('/insert', (req, res, next) => {
    
    let sql_order = 'INSERT INTO `order` (create_time, address, customer_id)  VALUES (?, ?, ?)';
    
    var sql_order_item = 'INSERT INTO `order_item` (order_id, item_name, quantity, note)  VALUES (?, ?, ?, ?)';
    
    db.query('SELECT id FROM account WHERE phone_number = ?', [req.cookies.phoneNumber],  (err, customer_id)=>{
    
        if(err){
            
            // res.json(rows);
            console.log(err);
        }
        else{
            var string=JSON.stringify(customer_id);
            console.log('>> customer_id_string: ', string );
            var json =  JSON.parse(string);
            console.log('>> customer_id_json: ', json);
            console.log('>> customer_id: ', json[0].id);
            for(i = 0; i < req.body.itemName.length; i++){
                var item_name = req.body.itemName[i];
                var item_quantity = req.body.quantity[i];
                var item_note = req.body.note[i];
                    db.query(sql_order, [today, req.body.address, json[0].id],  (err, rows)=>{
                
                        if(err){
                            
                            // res.json(rows);
                            console.log(err);
                        }
                        else {
                            var order_id_string =JSON.stringify(rows);
                            console.log('>> order_id_string: ', order_id_string );
                            var order_id_json =  JSON.parse(order_id_string);
                            console.log('>> order_id_json: ', order_id_json);
                            console.log('>> order_id: ', order_id_json.insertId);
                            
                            db.query(sql_order_item, [order_id_json.insertId, item_name, item_quantity, item_note],  (err, row2s)=>{
                
                                if(err){
                                    
                                    // res.json(rows);
                                    console.log(err);
                                }
                            });
                        }
                    });
                    
                }
        }
    });
    
   

    var today = new Date();

   
    res.redirect('/support');
    return;
});



module.exports = router;