import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'

const container = props => {
console.log(props)
  return (
    <Container>
      {/* {this.state.albums.map(album => <ProductCard {...album} key={album._id} removeCard={this.removeCard} />)} */}
    </Container>
  )
}

const Container = styled.section`
   width: 80%;
   padding: 1% 5%;
   min-height: 65vh;
   margin: 10% auto;
   border-radius: 10px;
   background-color: #6acc91;
   background-image: linear-gradient(to bottom right, #84ffc1, #ffff78);
   @media (max-width: 800px) {
    width: 95%;
   }
`

export default container
