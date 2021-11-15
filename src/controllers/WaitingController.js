/* const Order = require('../models/Order');
const {mutipleMongooseToObject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose') */

const mysql = require('mysql');
const db = require('../config/db/DBconnection');
const Order = require('../models/Order');
const Item = require('../models/Item');
//const Tutorial = require("../models/Order");
class WaitingController {

    // [GET] /waiting
    /* index(req, res, next) {
        let sql = "SELECT * FROM order";
        let query = db.query(sql, (err, rows) => {
            if (err) throw err;
            res.render('user_index', {
                title: 'CRUD Operation using NodeJS / ExpressJS / MySQL',
                users: rows
            });
        });

    } */
    show(req, res, next) {
        res.send("SHOW  - " + req.params.id);
        let sql = "SELECT * FROM `order`";
        let query = db.query(sql, (err, rows) => {
            if (err) throw err;
            else res.send("SHOW  - ABC" + req.params.id);

        });
    }


    // Create and Save a new Tutorial
    create = (req, res) => {

        // Create a Tutorial
        const tutorial = new Order({
            title: req.body.title,
            description: req.body.description,
            published: req.body.published || false
        });

        // Save Tutorial in the database
        Order.create(tutorial, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            else res.send(data);
        });
    };

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

    detail(req, res, next) {
        const title = req.query.title;
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
                Item.getAll(title, (err, items) => {
                    if (err)
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while retrieving tutorials."
                        });
                    /* else res.send(items); */
                    else {
                        res.render('order/detail', {
                            data,items
                        });
                        
                    }
                });
                /* res.render('order/detail', {
                    data
                }); */
            }
        });
        
    }

    edit(req, res, next) {
        res.send("EDIT DETAIL")
    }

}

module.exports = new WaitingController;