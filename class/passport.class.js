/* PASSPORT CLASS */

const db = require('../db')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
    
    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        db.getConnection(function(err, connection) {
            connection.query("SELECT * FROM users WHERE id=" +id, function(err,rows){	
                connection.release();
                done(err, rows[0]);
            });
        });
    });

    passport.use('local', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

        bcrypt.hash(password, 10, function(err, hash) {
            db.getConnection(function(err, connection) {
                connection.query("SELECT * FROM users WHERE (username=? OR email=?) AND deleted=0 AND status=1", [email, email], function(err, rows){
                    connection.release();                                
                    if (err) return done(err);
                    if (!rows.length) {
                        return done("Not login.", false);
                    }
                    bcrypt.compare(password, rows[0].password, function(err, res) {
                        if (res === true){
                            return done(null, rows[0]);
                        } else {
                            return done("Not login.", false);
                        }
                    });
                });
            });
        });

    }));

};
