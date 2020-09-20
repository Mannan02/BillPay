'use strict';
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mannan:Helloworld2@cluster0.xuf5j.mongodb.net/Transactions?retryWrites=true&w=majority";


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

app.post('/dashboard', (req, res) => {
    MongoClient.connect(uri, { useUnifiedTopology: true })
        .then(client => {
            console.log('Connected to Database')
            const db = client.db("Transactions")
            const collection = db.collection('trans')
            const cursor = collection.find().toArray().then(results => {
                console.log(results)
                res.json(results)
            })
        })
        .catch(error => console.error(error))
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listening on port', port)
});