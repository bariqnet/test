const express = require('express')
const engine = require('ejs-locals')
const http = require('http')
const https = require('https')
const session = require('express-session');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const passport = require('passport')
const config = require('./config')
const routes = require('./routes')
const middlewares = require('./middlewares')

const app = express()

/* var privateKey  = fs.readFileSync('/home/admin/conf/web/ssl.socialus.pro.key', 'utf8');
var certificate  = fs.readFileSync('/home/admin/conf/web/ssl.socialus.pro.crt', 'utf8');
var ca  = fs.readFileSync('/home/admin/conf/web/ssl.socialus.pro.ca', 'utf8');
var credentials = {key: privateKey, cert: certificate, ca: ca}; */

const httpServer = http.createServer(app).listen(3000)
/* var httpsServer = https.createServer(credentials, app).listen(8000) */

var io = require('socket.io')(httpServer);

app.use(function(req, res, next) {
    req.io = io;
    next();
});

app.use("/assets", express.static(__dirname + '/assets'))
app.use("/media", express.static(__dirname + '/media'))
app.use("/images", express.static(__dirname + '/images'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('ejs', engine)
app.set('views', __dirname+ '/views')
app.set('view engine', 'ejs')

app.use(session({
    secret: 'sysus',
    name: 'sysus_account',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 18000000, secure: false, httpOnly: false }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(middlewares.auth)
// app.use(middlewares.relocate)
app.use('/', routes)




httpServer.listen(3000) 
/* httpsServer.listen(8000) */
