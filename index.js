'use strict';

const express = require('express')
const path = require('path')
const app = express()

const port = 5000
app.use(express.static(__dirname))
    // app.use(express.static(__dirname + "/vendor"))
    // app.use('/static', express.static())
    // app.use('/static', express.static())
app.get('/dashboard', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/loginpage/login.html'))
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listening on port', port)
});