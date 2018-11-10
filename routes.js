const express = require('express')
constpassport = require('passport')

var router = express.Router()

var home = require('./controllers/home');

var aboutus = require('./controllers/aboutus');
var ContactUs = require('./controllers/contactus');
var login = require('./controllers/login');
var ti4 = require('./controllers/ti4');


const passport = require('passport')
const passportClass = require('./class/passport.class');
passportClass(passport);



// const passportClass = require('./class/passport.class');
// passportClass(passport);

/* Home */
router.get('/', home.dashboard);

/* AboutUs */
router.get('/aboutus', aboutus.index);

/* signup */
router.get('/Contactus', ContactUs.index);

/* login */
router.get('/login', login.index);
/* signup */
router.get('/signup', login.signup);

/* ti4 */
router.get('/4ti', ti4.index);
/* ti4 */
router.get('/4ti_test', ti4.test);



// outer.get('/login', home.login);
router.post('/login', passport.authenticate('local'), home.login_post);
router.get('/logout', home.logout);


module.exports = router;
