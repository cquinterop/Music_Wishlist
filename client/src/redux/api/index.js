import axios from 'axios'

export const fetchSpotifyAlbums = query => axios(`http://localhost:5000/get_albums/${query}`)
export const getDataBaseAlbums = _ => axios('http://localhost:5000/get_wishes')
