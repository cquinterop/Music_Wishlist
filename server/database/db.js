const mongoose = require('mongoose')
const { mongoDB: { DB } } = require('../config/config')

mongoose.connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(res => console.log('Successfully connected to database.'))
    .catch(err => console.log('DB conection error', err))

module.exports = mongoose
