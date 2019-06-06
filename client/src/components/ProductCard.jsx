import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const productCard = props => {

  const databaseInstance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const addFav = () => {
    databaseInstance.post('/add_wish', {
      album: {
        name: props.album.name,
        link: props.album.link,
        cover: props.album.cover
      },
      artist: {
        name: props.artist.name
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const removeFav = () => {
    databaseInstance.delete(`/remove_wish/${props._id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      props.removeCard(props._id)
  }

  return (
    <Card>
      <Image
        src={props.album.cover}
        alt="Card"
        onClick={addFav}
        style={{ width: '100%', borderRadius: '0px 0px 0px 50px' }} />
      <Container>
        <h4 style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <Link
            href={props.album.link}
            target="_blank"
            title={props.album.name}
            rel="noopener noreferrer" >
            {props.album.name}
          </Link>
        </h4>
        <p>{props.artist.name}</p>
        <button onClick={removeFav}>Remove</button>
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

const Image = styled.img`
    width: 100%;
    border-radius: 0px 0px 0px 50px;
    &:hover {
      filter: grayscale(100%);
      cursor: pointer;
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
