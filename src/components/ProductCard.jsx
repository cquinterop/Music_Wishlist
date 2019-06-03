import React from 'react'
import styled from 'styled-components'

const productCard = props => {
  return (
    <Card>
      <img
        src={props.image}
        alt="Card"
        style={{ width: '100%', borderRadius: '0px 0px 0px 50px' }} />
      <Container>
        <h4 style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <Link
            href={props.albumLink}
            target="_blank"
            title={props.name}
            rel="noopener noreferrer"
          >
            {props.name}
          </Link>
        </h4>
        <Link
          href={props.artistLink}
          target="_blank"
          title={props.description}
          rel="noopener noreferrer">
          {props.description}
        </Link>
        <p>{props.price}</p>
      </Container>
    </Card>
  )
}

const Card = styled.div`
    background: #FFF;
    transition: 0.3s;
    border-radius: 10px;
    overflow: hidden;
    width: 20%;
    display: inline-block;
    margin: 2%;
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      cursor: pointer;
    }
    @media (max-width: 1000px) {
        width: 40%;
        margin: 4%;
    }
    @media (max-width: 600px) {
        width: 80%;
        margin: 4% 8%;
    }
`

const Container = styled.div`
    padding: 10px 16px;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Link = styled.a`
    white-space: nowrap;
`

export default productCard
