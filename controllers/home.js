/* HOME CONTROLLER */

// const HomeClass = require('../class/home.class')
// const ToolsClass = require('../class/tools.class')
// const projects = require('../class/projects.class')

exports.dashboard = function(req, res){

    res.render('home/index', { title: 'Dashboard' });


};




exports.login_post = function(req, res){

    ToolsClass.ActivityLog({ req, event: 'login', details: 'Giriş yaptı.' });
    res.status(200).send({ status: true });
    
};

exports.logout = function(req, res){
    
    ToolsClass.ActivityLog({ req, user_id: (req.user ? req.user.id : 0), event: 'logout', details: 'Çıkış yaptı.' });
    req.logout();
    res.redirect('/login?goodbye');

};