import React, { useState, useEffect } from 'react'

import axios from 'axios'
// import config from '../config/config'
// import Container from '../components/Container'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import styled from 'styled-components'


function Search() {
    const [albums, setAlbums] = useState([])
    const [query, setQuery] = useState('Muse')

    useEffect(() => {
        const getAlbums = async () => {
            const { data } = await axios(`http://localhost:5000/get_albums/${query}`);
            setAlbums(data)
        }
        getAlbums()
    }, [query])

    const filterMusic = query => setQuery(query)

    return (
        <div>
            <Header
                filterMusic={filterMusic}
                message={albums.length === 0 && 'Invalid name, please type again'} />
            {/* <Route path="/" exact component={Container} /> */}
            <Container>
                {albums.map(album => <ProductCard {...album} key={album._id} />)}
            </Container>
        </div>
    )
}

const Container = styled.section`
   width: 80%;
   padding: 1% 5%;
   min-height: 65vh;
   margin: 0 auto;
   border-radius: 10px;
   background-color: #6acc91;
   background-image: linear-gradient(to bottom right, #84ffc1, #ffff78);
   @media (max-width: 800px) {
    width: 95%;
   }
`

export default Search;
