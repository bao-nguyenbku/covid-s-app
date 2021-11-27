const express = require('express');
const router = express.Router();
const db = require('../config/db/DBconnection');

exports.show = (req, res, next) => {
    // res.json(user);
    let sql = "SELECT count(feedback_id) as numFeed FROM feedback where fbcheck='Y';";
    db.query(sql, (err, re) =>{
        res.render('index', {count_feedback: re[0]});
    });
}
exports.feedback = (req, res, next) => {
    // res.json(user);
    console.log(res);
    let sql = "SELECT * FROM feedback where fbcheck='Y';";
    db.query(sql, (err, re) =>{
        //res.render('login', { message: "Đăng ký tài khoản tình nguyện viên thành công. Quản trị viên sẽ liên lạc với bạn" });
        res.render('feedback', {feedback: re});
    });
}
