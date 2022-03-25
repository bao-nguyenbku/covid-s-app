const authenicateUser = (permission) => {
    return (req, res, next) => {
        let userRole = null;
        if (req.session.user) {
            userRole = req.session.user.role;
        }
        if (permission.includes(userRole)) {
            next();
        }
        else {
            res.status(401).send(`
            <h1 style="text-align: center; margin-top: 20%;">Bạn không có quyền truy cập vào trang này, <a href="/">vui lòng quay lại</a></h1>`);
        }
    };
}
module.exports = authenicateUser;