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
    API_data: [],
    search: 'Back in black',
    msg: 'Invalid name, please type again'
  }

  instance = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.TOKEN}`
    }
  })

  componentWillMount() {
    return this.makeRequest()
  }

  filterMusic = query => {
    this.setState({ search: query }, () => this.makeRequest())
  }

  makeRequest = () => {
    this.instance
      .get(`/search?q=${this.state.search}&type=album&limit=30`)
      .then(res => res.data.albums.items)
      .then(data => this.setState({ API_data: data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        < Header
          filterMusic={this.filterMusic}
          message={this.state.API_data.length === 0 ? this.state.msg : null} />
        < Container>
          {this.state.API_data.map(item => (
            <ProductCard
              image={item.images[1].url}
              name={item.name}
              description={item.artists[0].name}
              artistLink={item.artists[0].external_urls.spotify}
              albumLink={item.external_urls.spotify}
              key={item.id} />))
          }
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
