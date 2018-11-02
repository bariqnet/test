const express = require('express')
const passport = require('passport')

var router = express.Router()

var home = require('./controllers/home');

var aboutus = require('./controllers/aboutus');
var ContactUs = require('./controllers/contactus');
var login = require('./controllers/login');


// const passportClass = require('./class/passport.class');
// passportClass(passport);

/* Home */
router.get('/', home.dashboard);

/* AboutUs */
router.get('/aboutus', aboutus.index);

/* login */
router.get('/login', login.index);
/* signup */
router.get('/signup', login.signup);

module.exports = router;
