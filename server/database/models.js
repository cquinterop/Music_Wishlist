const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  album: {
    name: { type: String, required: true },
    link: { type: String, required: true },
    cover: { type: String, required: true }
  },
  artist: {
    name: { type: String, required: true }
  }
}, {timestamps: true})

const wishlist =  mongoose.model('Wishlist', wishlistSchema)

module.exports = wishlist
