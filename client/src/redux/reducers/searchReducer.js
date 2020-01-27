export default function searchSpotifyAlbums(state = {}, { type, payload }) {
    switch (type) {
        case 'GET_SPOTIFY_ALBUMS_SUCCESS':
            return {
                ...state,
                payload
            }
        case 'GET_SPOTIFY_ALBUMS_FAILED':
            return {
                ...state,
                payload
            }
        default:
            return state
    }
}
