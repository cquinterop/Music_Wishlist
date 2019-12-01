const Wishlist = require('../database/models')
const { spotify: { CLIENT_ID, CLIENT_SECRET } } = require('../config/config')
const axios = require('axios')
const qs = require('qs')

const controller = {}

controller.get_albums = async (req, res) => {
  try {
    const encoded_auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
    const { data: { access_token } } = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: qs.stringify({
        'grant_type': 'client_credentials'
      }),
      headers: {
        'Authorization': `Basic ${encoded_auth}`,
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    const { data: { albums: { items: albums } } } = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/search?q=${req.body.search}&type=album&limit=30`,
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
    const orgnanizedAlbums = _ => {
      const newState = []
      albums.map(album => {
        const newData = {
          album: {
            name: album.name,
            link: album.external_urls.spotify,
            cover: album.images[1].url
          },
          artist: {
            name: album.artists[0].name
          },
          _id: album.id
        }
        return newState[newState.length] = newData
      })
      return newState
    }

    res.send(orgnanizedAlbums());
  } catch (error) {
    console.error(error);
  }
}

controller.get_wishes = async (req, res) => {
  const wishes = await Wishlist.find()
  res.send(wishes)
}

controller.get_wish = async (req, res) => {
  const wish = await Wishlist.findById(req.params.id)
  res.send(wish)
}

controller.add_wish = async (req, res) => {
  const wish = new Wishlist({
    album: {
      name: req.body.album.name,
      link: req.body.album.link,
      cover: req.body.album.cover
    },
    artist: {
      name: req.body.artist.name,
      link: req.body.artist.link
    }
  })
  await wish.save()
  res.send({ status: 'Wish Saved' })
}

controller.update_wish = async (req, res) => {
  const { title, description } = req.body
  const newTask = { title, description }
  await Wishlist.findByIdAndUpdate(req.params.id, newTask)
  res.send({ status: 'Wish Updated' })
}

controller.remove_wish = async (req, res) => {
  await Wishlist.findByIdAndRemove(req.params.id)
  res.send({ status: 'Wish Deleted' })
}

module.exports = controller
