const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
require('dotenv').config()
// Import routes
const authRoute = require('./routes/auth')
const docsRoute = require('./routes/docs')
const addRoute = require('./routes/add')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

// Connect to DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to DB! '))

app.use(express.json())

// Routes middleware
app.use('/api/user', authRoute)
app.use('/api/docs', docsRoute)
app.use('/api/add', addRoute)
 

app.listen(PORT, () => 
        console.log(`Server listening on port: ${PORT}`)
)