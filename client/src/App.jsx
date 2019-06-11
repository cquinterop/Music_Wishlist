import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import Home from './views/Home'
import Search from './views/Search'
import Wishlist from './views/Wishlist'

const App = () => {
  return (
    <Router>
      <Nav>
        <Link to="/">Home</Link> ||&nbsp;
        <Link to="/search">Search</Link> ||&nbsp;
        <Link to="/wishlist">Wishlist</Link>
      </Nav>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/wishlist" component={Wishlist} />
    </Router>
  )
}

const Nav = styled.nav`
  width: 100%;
  background: white;
  text-align: center;
`

export default App;
