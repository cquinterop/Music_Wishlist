import { get } from 'lodash'

export const spotifyAlbums = state => get(state, 'searchSpotifyAlbums.payload.albums')
