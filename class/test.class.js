const db = require('../db')


exports.questions = function (callback) {
    console.log(1);
    var sql = "SELECT * FROM question "
    console.log(2);
    db.getConnection(function (err, connection) {
        console.log(3);
        connection.query(sql, function (err, results, fields) {
            connection.release();
            if (err) {
                console.log('SQlEroor:   ' + err);
                return callback('MySQL Error');
            }
            if (results) {
                return callback(null, results)
            } else {
                return callback('Error', null);
            }
        });
    });

};

