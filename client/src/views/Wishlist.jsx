import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

function Wishlist() {
    const [albums, setAlbums] = useState([])

    useEffect(_ => {
        const getAlbums = async _ => {
            const { data } = await axios('http://localhost:5000/get_wishes')
            setAlbums(data)
        }
        getAlbums()
    }, [])

    const removeCard = id => {
        const remainingAlbums = albums.filter(album => album._id !== id)
        setAlbums(remainingAlbums)
    }

    return (
        <div>
            {albums.map(album => <ProductCard {...album} key={album._id} removeCard={removeCard} />)}
        </div>
    )
}

export default Wishlist;
