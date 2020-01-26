export default async function getWhishlistAlbums(query) {
    try {
        const { data: albums } = await axios(`http://localhost:5000/get_albums/${query}`)
        return {
            type: 'GET_SPOTIFY_ALBUMS',
            payload: albums
        }
    } catch (error) {
        console.error(error)
    }
}
