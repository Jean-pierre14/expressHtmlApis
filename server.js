const exp = require('express')
const fs = require('fs')
const url = require('url')
const path = require('path')
const app = exp()
const PORT = process.env.PORT || 7000
const routers = require('./routes/posts')
const db = require('./models/')

app.use('/', routers)

app.use( async (req, res)=>{
    let sql = `SELECT * FROM users`
    await db.query(sql, (err, result)=>{
        if(err) throw err
        res.json({data: result})
    })
})

app.listen(PORT, (err)=>{
    if(err) throw err
    console.log(`Server start on port ${PORT}`)
})