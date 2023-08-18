const makeUserDbMethods = require('./user.db');



const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'users',
    password:'divyesh@123'
}).promise();



const userDbMethods = makeUserDbMethods({
    connection,
    database: 'users'
})



const dbMethods = {
    userDbMethods,
    
}
module.exports = dbMethods