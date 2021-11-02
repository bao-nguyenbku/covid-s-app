const homeRouter = require('./home');
const loginRouter = require('./login');
const loggoutRouter = require('./loggout');
const registerRouter = require('./register');
const profileRouter = require('./profile');
const supportRouter = require('./support');
const waitingRouter = require('./waiting');
const doctorRouter = require('./doctor');
const adminRouter = require('./admin');
function route(app) {
    app.use('/doctor', doctorRouter);
    app.use('/support', supportRouter);
    app.use('/waiting', waitingRouter);
    app.use('/admin/dashboard', adminRouter);
    app.use('/login', loginRouter);
    app.use('/loggout', loggoutRouter);
    app.use('/register', registerRouter);
    app.use('/profile', profileRouter);
    app.use('/index', homeRouter);
}

module.exports = route;