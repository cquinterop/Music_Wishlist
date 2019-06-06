const controller = require('../controllers/controllers')

module.exports = app => {
    app.get('/get_wishes', controller.get_wishes)
    app.get('/get_wish/:id', controller.get_wish )
    app.post('/add_wish', controller.add_wish)
    app.put('/update_wish/:id', controller.update_wish)
    app.delete('/remove_wish/:id', controller.remove_wish)
}
