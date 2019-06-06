import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css'
import axios from 'axios'
import config from '../config/config'
import ProductCard from '../components/ProductCard.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

class App extends Component {
  state = {
    albums: [],
    search: '',
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
    axios
      .get('http://localhost:5000/get_wishes')
      .then(res => res.data)
      .then(albums => this.setState({ albums }))
      .catch(err => console.log(err))
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

  removeCard = id => {
    let albums = [...this.state.albums]
    const array = albums.map(album => album.id)
    const index = array.findIndex(currentId => currentId === id)

    albums.splice(index, 1)
    this.setState({ albums })
  }

  render() {
    return (
      <div className="App">
        <Header
          filterMusic={this.filterMusic}
          message={this.state.albums.length === 0 ? this.state.msg : null} />
        <Container>
          {this.state.albums.map(album => <ProductCard {...album} key={album._id} removeCard={this.removeCard} />)}
        </Container>
        <Footer />
      </div>
    )
  }
}

const Container = styled.section`
   width: 80%;
   padding: 1% 5%;
   min-height: 65vh;
   margin: -50px auto;
   border-radius: 10px;
   background-color: #6acc91;
   background-image: linear-gradient(to bottom right, #84ffc1, #ffff78);
   @media (max-width: 800px) {
    width: 95%;
   }
`

export default App;
