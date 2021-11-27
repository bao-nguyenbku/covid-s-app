// const Helper = require('./Helper');
const db = require('../config/db/DBconnection');
const bcrypt = require('bcrypt');
const { v1: uuidv1 } = require('uuid');

exports.login = (req, res, next) => {
    const userInput = {
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    }
    let sql = 'SELECT * FROM account WHERE phone_number = ?';
    db.query(sql, userInput.phoneNumber, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            if (bcrypt.compareSync(userInput.password, result[0].password)) {
                req.session.user = result[0];

                if (result[0].role == 'admin') {
                    res.render('admin/dashboard');
                }
                else {
                    res.render('index');
                }
            }
            else {
                res.render('login', { message: "Password is wrong" });
            }
        }
        else {
            res.send('Account wasn\'t existed');
        }
    });

}
exports.register = (req, res, next) => {
    const userInput = {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        image: 'avatar-default.jpg'
    }

    // Find if at least one user stored in database
    let sql = 'SELECT * FROM account WHERE phone_number = ?';
    db.query(sql, userInput.phoneNumber, (err, result) => {
        if (err) throw err;
        // One or more user are found
        if (result.length > 0) {
            res.render('register', { message: "Số điện thoại này đã được sử dụng" });
        }

        if (userInput.password !== userInput.confirmPassword) {
            res.render('register', { message: "Mật khẩu không khớp" });
        }

        else {
            const id = uuidv1();
            const today = new Date();
            let createTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

            let pwd = userInput.password;
            userInput.password = bcrypt.hashSync(pwd, 10);
            let sql = 'INSERT INTO account (id, last_name, first_name, phone_number, password, create_time, avatar, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            db.query(sql, [id, userInput.lastName, userInput.firstName, userInput.phoneNumber, userInput.password, createTime, userInput.image, 'C'], (err, result) => {
                if (err) throw err;
                if (result) {
                    sql = "INSERT INTO customer SET account_id = ?;"
                    db.query(sql, [id], (err, result) => {
                        if (err) throw err;
                        if (result) {
                            res.render('login', { message: "Đăng ký tài khoản thành công" });
                        }
                    });

                }

            });
        }

    });
}

exports.volunteerRegistier = (req, res, next) => {
    const userInput = {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        image: 'avatar-default.jpg'
    }

    // Find if at least one user stored in database
    let sql = 'SELECT * FROM `account`, volunteer WHERE phone_number = ?;';
    db.query(sql, userInput.phoneNumber, (err, result) => {
        if (err) throw err;
        // One or more user are found
        if (result.length > 0) {
            res.render('register', { message: "Số điện thoại này đã được sử dụng" });
        }

        sql = "select * from `account`, volunteer where `account`.id = volunteer.account_id and volunteer.email = ?";
        db.query(sql, [userInput.email], (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                res.render('register', { message: "Email này đã được sử dụng" });
            }
        })

        if (userInput.password !== userInput.confirmPassword) {
            res.render('register', { message: "Mật khẩu không khớp" });
        }

        else {
            const id = uuidv1();
            const today = new Date();
            let createTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

            let pwd = userInput.password;
            userInput.password = bcrypt.hashSync(pwd, 10);
            let sql = 'INSERT INTO account (id, last_name, first_name, phone_number, password, create_time, avatar, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';
            db.query(sql, [id, userInput.lastName, userInput.firstName, userInput.phoneNumber, userInput.password, createTime, userInput.image, 'V'], (err, result) => {
                if (err) throw err;
                if (result) {
                    sql = "INSERT INTO volunteer SET email = ?, account_id = ?;"
                    db.query(sql, [userInput.email, id], (err, result) => {
                        if (err) throw err;
                        if (result) {
                            res.render('login', { message: "Đăng ký tài khoản tình nguyện viên thành công" });
                        }
                    });

                }

            });
        }

    });
}
exports.loggout = (req, res, next) => {
    // res.json("Loggout");
    if (req.session.user) {
        req.session.destroy(() => {
            req.session = null;
            res.redirect('/');
        });
    }
}