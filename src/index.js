const path = require('path')
const express = require('express')
const port = 3080
const morgan = require('morgan');
var expresshbs  = require('express-handlebars');

const app = express()

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', expresshbs({
    extname: '.hbs',
    defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/doctors', function (req, res) {
    res.render('doctors');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})