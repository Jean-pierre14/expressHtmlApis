const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
})

db.connect((err, result)=>{
    if(err) throw err
    console.log('Connected to the Database')
})

module.exports = db