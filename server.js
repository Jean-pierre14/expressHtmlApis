const exp = require('express')
const cors = require('cors')
const app = exp()
const PORT = process.env.PORT || 3000
const routers = require('./routes/posts')
const db = require('./models/')

app.use(cors())

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