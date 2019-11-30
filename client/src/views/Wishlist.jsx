import React, { Component } from 'react'

import axios from 'axios'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'


class Wishlist extends Component {
    state = {
        albums: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/get_wishes')
            .then(res => res.data)
            .then(albums => this.setState({ albums }))
            .catch(err => console.log(err))
    }

    removeCard = id => {
        let albums = [...this.state.albums]
        const remainingAlbums = albums.filter(album => album._id !== id)
        this.setState({ albums: remainingAlbums })
    }

    render() {
        return (
            <div>
                {this.state.albums.map(album => <ProductCard {...album} key={album._id} removeCard={this.removeCard} />)}
                <Footer />
            </div>
        )
    }
}

export default Wishlist;
