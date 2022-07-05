const exp = require('express'),
    cors = require('cors'),
    { success, error } = require('consola'),
    dotenv = require('dotenv').config(),
    app = exp(),
    PORT = process.env.PORT || 3000,
    routers = require('./routes/userCrud')

app.use(cors())

app.use(exp.json())

app.use(exp.urlencoded({ extends: false }))

// @Desc A welcome to the API
// This doen't work
// It's show only the message where to find the api/ documentation :)

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my APIs go to this link localhost:7000/Api and enjoy that' })
})

// Post request
app.post('', (req, res) => {

    console.log(req.body);

})

// Router to our APIs
app.use('/api', routers)

app.use((req, res) => {

    res.send('Page not found')

})

app.listen(PORT, (err) => {
    if (err) throw error({ message: `Error: ${err}`, badge: true })
    success({ message: `Server start on port ${PORT}`, badge: true })
})