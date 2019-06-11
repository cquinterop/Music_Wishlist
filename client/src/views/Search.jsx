import React, { Component } from 'react'

import axios from 'axios'
import config from '../config/config'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'


class Search extends Component {
    state = {
        albums: [],
        search: 'Muse',
        msg: 'Invalid name, please type again'
    }

    spotifyInstance = axios.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.TOKEN}`
        }
    })

    componentDidMount() {
        this.makeRequest()
    }

    filterMusic = query => {
        this.setState({ search: query }, () => this.makeRequest())
    }

    makeRequest = () => {
        this.spotifyInstance
            .get(`/search?q=${this.state.search}&type=album&limit=30`)
            .then(res => res.data.albums.items)
            .then(data => {
                let newState = []
                data.map(item => {
                    const newData = {
                        album: {
                            name: item.name,
                            link: item.external_urls.spotify,
                            cover: item.images[1].url
                        },
                        artist: {
                            name: item.artists[0].name
                        },
                        _id: item.id
                    }
                    return newState[newState.length] = newData
                })
                return newState
            })
            .then(albums => this.setState({ albums }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Header
                    filterMusic={this.filterMusic}
                    message={this.state.albums.length === 0 ? this.state.msg : null} />
                {/* <Route path="/" exact component={Container} /> */}

                {this.state.albums.map(album => <ProductCard {...album} key={album._id} />)}
        <Footer />
            </div>
        )
    }
}

export default Search;
