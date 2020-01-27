import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { spotifyAlbums } from '../redux/selectors'

import Header from '../components/Header'
import Container from '../components/Container'
import ProductCard from '../components/ProductCard'

function Search() {
    const albums = useSelector(state => spotifyAlbums(state), shallowEqual)

    return (
        <div>
            <Header
                message={albums && albums.length === 0 && 'Invalid name, please type again'}
            />
            <Container>
                {albums && albums.map(album => <ProductCard {...album} key={album._id} />)}
            </Container>
        </div>
    )
}

export default Search;
