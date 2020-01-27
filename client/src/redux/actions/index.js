export const getSpotifyAlbums = query => ({
    type: 'GET_SPOTIFY_ALBUMS',
    query
})

export const getWishlistAbums = payload => ({
    type: 'GET_WISHLIST_ALBUMS',
    payload
})
