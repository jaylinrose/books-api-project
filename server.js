require('dotenv').config()
const express = require('express')
const app = express()


// Create a homepage route.
app.get('/', function (req, res) {
    res.send('Hello world')
})


// Listen for connections.
app.listen(3005, function () {
    console.log('I am awake!')
})
