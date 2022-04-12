const exp = require('express')
const router = exp.Router()
const db = require('../models/')

router.get('/', async(req, res) => {
    let sql = `SELECT * FROM users ORDER BY id DESC`
    await db.query(sql, (err, data) => {
        if (err) throw err
        res.json({ data })
    })
})

module.exports = router