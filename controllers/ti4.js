const testclass = require('../class/test.class.js')


exports.index = function (req, res) {

    res.render('ti4/index', { title: '4ti' });


};


exports.test = function (req, res) {
    testclass.questions( function (err, Qti) {
        res.render('ti4/test', {
            title: '4ti Test', Qti: Qti
        });

    });
};
