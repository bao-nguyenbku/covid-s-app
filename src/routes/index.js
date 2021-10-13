const homeRouter = require('./home');
const loginRouter = require('./login');
const registerRouter = require('./register');
function route(app) {
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/', homeRouter);
}

module.exports = route;