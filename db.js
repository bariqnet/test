const mysql = require('mysql')
const config = require('./config')

var db  = mysql.createPool({
    host: config.MySQL.Host,
    user: config.MySQL.User,
    password: config.MySQL.Password,
    database: config.MySQL.Database,
    multipleStatements: true,
    connectionLimit: 100
});

module.exports = db;