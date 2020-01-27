import React from 'react'
import styled from 'styled-components'

const container = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.section`
   width: 80%;
   padding: 1% 5%;
   min-height: 65vh;
   margin: 5% auto;
   border-radius: 10px;
   background-color: #6acc91;
   background-image: linear-gradient(to bottom right, #84ffc1, #ffff78);
   @media (max-width: 800px) {
    width: 95%;
   }
`

export default container
