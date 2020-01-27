import { all } from 'redux-saga/effects'
import getSpotifyAlbumsWatcher from './getSpotifyAlbumsAsync'

export default function* rootSaga() {
    yield all([
        getSpotifyAlbumsWatcher(),
    ])
}
