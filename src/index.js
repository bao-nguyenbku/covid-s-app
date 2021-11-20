const express = require('express');
const path = require('path');
const app = express();
const expresshbs = require('express-handlebars');
// const db = require('./config/db/DBconnection');
const route = require('./routes');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = 3060;
// Body-parser
app.use(
    express.urlencoded({
        extended: true,
    })
);
// app.use(express.json());
app.use(cookieParser());
// For store data in session
app.use(session({
    cookie: { maxAge: 3 * 24 * 60 * 60 * 1000 },
    secret: "S3cret",
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});
  // For upload file to db
app.use(fileUpload());

//--- Template engine ----------
app.engine('hbs', expresshbs({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/resources/views/layouts/',
    partialsDir: [__dirname + '/resources/views/partials/',
                  __dirname + '/resources/views/admin/' ],
    helpers: {
        mul: function (qty, price) { return price * qty; },
        sum: function (qty, num) { return qty + num; },
        isEmpty: function (item) { return item == null; },
        isAdmin: function (User) {
            return User == 'admin';
        },
        formatDate: function (date) {
            if (date) {
                let option = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
                return new Date(date).toLocaleDateString("vi-VN", option);
            }
        },
        formatCurrency: function (num) {
            //======================================
            // FORMAT CURRENCY BEFORE SHOW OUT
            //======================================
            const formatter = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND"
            });

            return formatter.format(num);

        },
        equal: function(a, b) {
            return a == b;
        }

    }
}));
app.set('view engine', 'hbs');
//------------------------------
// Directory to views folder
app.set('views', path.join(__dirname, 'resources/views'));

// Use public document like CSS
app.use(express.static(path.join(__dirname, '/public')));

// Route to pages
route(app);

app.listen(port, () => console.log(`Server is listening at port: ${port}`));
