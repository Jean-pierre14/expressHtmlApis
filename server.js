const exp = require('express')
// what does require are for?  {fs/url/path}
const fs = require('fs')
const url = require('url')
const path = require('path')
// dont thisnk you are in needof those  {fs/url/path}
const app = exp()
const PORT = process.env.PORT || 7000
const routers = require('./routes/posts')
const db = require('./models/')

app.get('/', (req, res)=>{
    res.send('Welcome to my APIs go to this link localhost:7000/Api and enjoy that')
})
app.use('/api', routers)

app.use((req, res)=>{
    res.send('Page not found')
})

app.listen(PORT, (err)=>{
    if(err) throw err
    console.log(`Server start on port ${PORT}`)
})
