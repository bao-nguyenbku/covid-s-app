const homeRouter = require('./home');
const loginRouter = require('./login');
const loggoutRouter = require('./loggout');
const registerRouter = require('./register');
const profileRouter = require('./profile');

function route(app) {
    app.use('/login', loginRouter);
    app.use('/loggout', loggoutRouter);
    app.use('/register', registerRouter);
    app.use('/profile', profileRouter);
    app.use('/', homeRouter);
}

module.exports = route;