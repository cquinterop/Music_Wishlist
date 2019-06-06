const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/routes')
const mongoose = require('./database/db')
const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

router(app)

app.listen(port, () => console.log(`Server running on port ${port}`))
