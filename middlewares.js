
exports.auth = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
        next();
    } else {
        // if(req.path != '/login' && !req.path.startsWith('/public-ticket-view/')){
        //     res.redirect('/login');
        // } else {
        //     next();
        // }
        next();
    }
};


