require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 8000
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoStore = require('connect-mongo')

// Database connection
const url = process.env.mongoURI
mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;

// Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24*60*60*1000 }, // cookie life for 24hrs
    store: MongoStore.create({
        mongoUrl: url,
        collection: 'sessions'
    })
}))

app.use(flash())

// Assets
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
