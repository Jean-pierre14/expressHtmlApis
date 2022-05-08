const mysql = require('mysql'),
    { success, error } = require('consola'),
    db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node'
    })

db.connect((err, result) => {
    if (err) throw err
    success({ message: `Connected to MySql DB `, badge: true })
})

module.exports = db