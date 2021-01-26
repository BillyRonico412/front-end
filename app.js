// Chargement des modules
const express = require('express')

// Constantes
const app = express()

// Middleware
app.use('/front-end', express.static(__dirname + '/views'))
app.use(require('morgan')('dev'))

app.get('/', (req, res) => {
    res.redirect('/front-end/portfolio-bootstrap')
})

app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/favicon.ico')
})

app.listen(8080, () => console.log('Listen to 8080'))