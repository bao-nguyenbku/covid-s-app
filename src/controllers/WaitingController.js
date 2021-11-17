const mysql = require('mysql');
const db = require('../config/db/DBconnection');
const Order = require('../models/Order');
const Item = require('../models/Item');
class WaitingController {

    // [GET] /waiting
    index = (req, res) => {
        const title = req.query.title;
        
        Order.getAll(title, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            /* else res.send(data); */
            else {
                res.render('user/waiting', {
                    data
                });
                
            }
        });
    };

    show(req, res, next) {
        res.send("SHOW  - " + req.params.id);
        let sql = "SELECT * FROM `order`";
        let query = db.query(sql, (err, rows) => {
            if (err) throw err;
            else res.send("SHOW  - ABC" + req.params.id);

        });
    }  

    detail(req, res, next) {
        //const title = req.query.title;
        Order.findById(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: 'Not found Tutorial with id ${req.params.id}.'
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving Tutorial with id " + req.params.id
                    });
                }
            } 
            else /* res.send(data); */
            {
                Item.findById(req.params.id, (err, items) => {
                    if (err) {
                        if (err.kind === "not_found") {
                            res.render('order/detail', {
                                data,items
                            });
                        } else {
                            res.status(500).send({
                                message: "Error retrieving Tutorial with id " + req.params.id
                            });
                        }
                    } 
                    /* else res.send(items); */
                    else {
                        res.render('order/detail', {
                            data,items
                        });
                        
                    }
                });
            }
        });
        
    }

    edit(req, res, next) {
        res.send("EDIT DETAIL")
    }
}

module.exports = new WaitingController;