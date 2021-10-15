const Helper = require('./Helper');
const db = require('../config/db/DBconnection');
const bcrypt = require('bcrypt');

exports.login = (req, res, next) => {
    const userInput = {
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
    }

    let sql = 'SELECT * FROM users WHERE phoneNumber = ?';
    db.query(sql, userInput.phoneNumber, (err, result) => {
        if (err) throw err;
        if (result) {
            // console.log(result[0]);
            if (bcrypt.compareSync(userInput.password, result[0].password)) {
                req.session.user = result[0];
                res.render('index');
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
    let sql = 'SELECT * FROM users WHERE phoneNumber = ?';
    db.query(sql, userInput.phoneNumber, (err, result) => {
        if (err) throw err;
        // One or more user are found
        if (result.length > 0) {
            res.render('register', { message: "This phone number has already used" });
        }

        else if (userInput.password !== userInput.confirmPassword) {
            res.render('register', { message: "Password is not matched" });
        }

        else {
            let pwd = userInput.password;
            userInput.password = bcrypt.hashSync(pwd, 10);
            let sql = 'INSERT INTO users (lastName, firstName, phoneNumber, password, image) VALUES (?, ?, ?, ?, ?)';
            db.query(sql, [userInput.lastName, userInput.firstName, userInput.phoneNumber, userInput.password, userInput.image], (err, result) => {
                if (err) throw err;
                else {
                    res.render('login', { message: "User registerd" });
                }
            });
        }

    });
}

exports.loggout = (req, res, next) => {
    if (req.session.user) {
        req.session.destroy(() => {
            res.redirect('/');
        });
    }
}