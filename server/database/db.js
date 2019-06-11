const mongoose = require('mongoose')
const config = require('../../client/src/config/config')

mongoose.connect(config.DB, { useNewUrlParser: true, useFindAndModify: false })
    .then(res => console.log('Successfully connected to database.'))
    .catch(err => console.log('DB conection error', err))

module.exports = mongoose
