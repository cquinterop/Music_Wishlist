import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import styled from 'styled-components'
import Home from './views/Home'
import Search from './views/Search'
import Wishlist from './views/Wishlist'
import NotFound from './views/NotFound'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Nav>
          <Link to="/">Home</Link> ||&nbsp;
        <Link to="/search">Search</Link> ||&nbsp;
        <Link to="/wishlist">Wishlist</Link>
        </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" to="/notfound" />
        </Switch>
      </Router>
    </Provider>
  )
}

const Nav = styled.nav`
  width: 100%;
  background: white;
  text-align: center;
`

export default App;
