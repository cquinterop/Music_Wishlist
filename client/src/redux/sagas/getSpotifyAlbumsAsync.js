import { put, call, takeLatest } from 'redux-saga/effects'
import { fetchSpotifyAlbums } from '../api'

function* getSpotifyAlbumsAsync({ query }) {
    try {
        const { data: albums } = yield call(fetchSpotifyAlbums, query)
        yield put({ type: 'GET_SPOTIFY_ALBUMS_SUCCESS', payload: { query, albums } })
    } catch (error) {
        yield put({ type: 'GET_SPOTIFY_ALBUMS_FAILED', payload: error })
    }
}

export default function* getSpotifyAlbumsWatcher() {
    yield takeLatest('GET_SPOTIFY_ALBUMS', getSpotifyAlbumsAsync)
}
