const db = require('../config/db/DBconnection');
const bcrypt = require('bcrypt');

function User() {};

User.prototype = {
  find: function(phoneNumber, callback) {
    console.log(typeof phoneNumber);
    callback(null);
    // let sql = `SELECT * FROM users WHERE phoneNumber = ?`;
    //   db.query(sql, [phoneNumber], function(err, result) {
    //     if (err) throw err;
    //     if (result.length) {
    //       callback(result[0]);
    //     } 
    //     else {
    //       callback(null);
    //     }
    //   });
  },

  create: function(userInput, callback) {
    let phoneNumber = userInput.phoneNumber;
    
    this.find(phoneNumber, (result) => {
      if (result) {
        callback(null);
      }
      else {
        let pwd = userInput.password;
        let avatar = 'avatar-default.jpg';
        userInput.password = bcrypt.hashSync(pwd, 10);

        let bind = [];
        bind.push(userInput.lastName);
        bind.push(userInput.firstName);
        bind.push(userInput.phoneNumber);
        bind.push(userInput.password);
        bind.push(avatar);
        let sql = 'INSERT INTO users (lastName, firstName, phoneNumber, password, image) VALUES (?, ?, ?, ?, ?)';

        db.query(sql, bind, function (err, lastId) {
          if (err) throw err;
          callback(lastId);
        });
      }
    });

    
  },

  login: function(phoneNumber, password, callback) {
    // find the user data by phoneNumber.
    this.find(phoneNumber, function(user) {
      // if there is a user by this phoneNumber.
      if (user) {
        // now we check his password.
        if (bcrypt.compareSync(password, user.password)) {
          // return his data.
          callback(user);
          return;
        }
      }
      // if the username/password is wrong then return null.
      callback(null);
    });
  },
};

module.exports = User;
