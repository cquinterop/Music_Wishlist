const {
    get_albums,
    get_wishes,
    get_wish,
    add_wish,
    update_wish,
    remove_wish
} = require('../controllers/controllers')

module.exports = app => {
    app.post('/get_albums', get_albums)
    app.get('/get_wishes', get_wishes)
    app.get('/get_wish/:id', get_wish)
    app.post('/add_wish', add_wish)
    app.put('/update_wish/:id', update_wish)
    app.delete('/remove_wish/:id', remove_wish)
}
