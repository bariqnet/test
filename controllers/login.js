
exports.index = function(req, res){

    res.render('login', { title: ' تسجيل الدخول' });


};

exports.signup = function(req, res){

    res.render('signup', { title: ' تسجيل ' });


};  
