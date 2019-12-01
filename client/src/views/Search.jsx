import React, { Component } from 'react'

import axios from 'axios'
// import config from '../config/config'
// import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'


class Search extends Component {
    state = {
        albums: [],
        search: 'Muse',
        msg: 'Invalid name, please type again'
    }

    componentDidMount() {
        this.makeRequest()
    }

    filterMusic = query => {
        this.setState({ search: query }, () => this.makeRequest())
    }

    makeRequest = _ => axios
            .post('http://localhost:5000/get_albums', { search: this.state.search })
            .then(({ data: albums }) => this.setState({ albums }))
            .catch(err => console.log(err))

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
