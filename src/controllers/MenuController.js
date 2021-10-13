const mysql = require('mysql');
const db = require('../config/db/DBconnection');
exports.show = (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM foods', (err, result) => {
            connection.release();
            res.render('menu/show', { result });
        });
    });   
}
exports.create_form = (req, res) => {
    res.render('menu/create');
}

exports.create = (req, res) => {
    const addFood = req.body;
    let sampleFile;
    // console.log(req.files.sampleImage);
    let uploadPath;
    sampleFile = req.files.sampleImage;
    uploadPath = './src/public/upload/' + sampleFile.name;
    sampleFile.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
        db.getConnection((err, connection) => {
            if (err) throw err;
            console.log('Database is connected');
            connection.query('INSERT INTO foods SET name = ?, description = ?, price = ?, image = ?', [addFood.name, addFood.description, addFood.price, sampleFile.name], (err, result) => {
                connection.release();
                res.redirect('/menu');
            });
        });
    });
    
}

exports.store = (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM foods', (err, result) => {
            connection.release();
            res.render('menu/store', { result });
        });
    });   
}

exports.edit = (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err;
        let sql = `SELECT * FROM foods WHERE id = ${req.params.id}`;
        connection.query(sql, (err, result) => {
            res.render('menu/edit', { result });
        });
    });
}
exports.update = (req, res) => {
    let sampleFile;
    let uploadPath;
    if (req.files && Object.keys(req.files).length !== 0) {
        sampleFile = req.files.sampleImage;
        uploadPath = './src/public/upload/' + sampleFile.name;
        sampleFile.mv(uploadPath, (err) => {
            if (err) return res.status(500).send(err);
            db.getConnection((err, connection) => {
                if (err) throw err;
                let sql = `UPDATE foods SET name = ?, description = ?, price = ?, image = ? WHERE id = ?`;
                let data = [
                    req.body.name,
                    req.body.description,
                    req.body.price,
                    sampleFile.name,
                    req.params.id,
                ];
                connection.query(sql, data, (err, result) => {
                    connection.release();
                    res.redirect('/menu');
                });
            });
        });
    }
    else {
        db.getConnection((err, connection) => {
            if (err) throw err;
            let sql = `UPDATE foods SET name = ?, description = ?, price = ? WHERE id = ?`;
            let data = [
                req.body.name,
                req.body.description,
                req.body.price,
                req.params.id,
            ];
            connection.query(sql, data, (err, result) => {
                connection.release();
                res.redirect('/menu');
            });
        });
    }
    
}

exports.delete = (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('DELETE FROM foods WHERE id = ?', [req.params.id], (err) => {
            connection.release();
            if (err) throw err;
            res.redirect('/menu/store');
        });
    });
}