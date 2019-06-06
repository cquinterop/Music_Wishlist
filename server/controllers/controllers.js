const Wishlist = require('../database/models')

const controller = {}

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
