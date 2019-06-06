const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/music_wishlist', { useNewUrlParser: true })
    .then(res => console.log('Successfully connected to database.'))
    .catch(err => console.log('DB conection error', err))

module.exports = mongoose
