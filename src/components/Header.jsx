import React from 'react'
import styled from 'styled-components'

const header = props => {
  const textInput = React.createRef()

  const submitHandler = e => {
    e.preventDefault()
    props.filterMusic(textInput.current.value)
  }

  return (
    <Header>
      <h1>Find Your Favorite Albums</h1>
      <form
      method="get"
        onSubmit={submitHandler}>
        <Input
          ref={textInput}
          placeholder="Search by album or artist"
          type='text' />
        <Buttom
          type='submit'
          value='Submit' />
      </form>
      <p>{props.message ? 'Invalid name, please try again' : null}</p>
    </Header>
  )
}

const Header = styled.header`
   width: 100%;
   color: #FFF;
   text-align: center;
   padding: 50px 0 100px;
`

const Input = styled.input`
    border-radius: 20px;
    height: 30px;
    width: 250px;
    border: none;
    margin: 30px 5px;
    padding-left: 15px;
    font-size: 15px;
    color: #7c8194;
    font-weight: 300;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 7px 1px rgb(198, 203, 224);
      border: 1px solid #2f2fff;
    }
`

const Buttom = styled.input`
    border-radius: 20px;
    height: 30px;
    width: 80px;
    border: none;
    margin: 30px 5px 0;
    background: #9a9a9a;
    color: #FFF;
    font-weight: 600;
    font-size: 12px;
    font-family: inherit;
    &:hover {
      outline: none;
      cursor: pointer;
      background: #55a976;
    }
`

export default header
