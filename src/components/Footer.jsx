import React from 'react'
import styled from 'styled-components'

const footer = props => {

  return (
    <Footer>
      <div>
        <p>
          {new Date().getFullYear()}
          &nbsp;Made by 
          <Link
            href="https://github.com/cquinterop"
            target="_blank"
            rel="noopener noreferrer" >
            Cristian Quintero
          </Link>
        </p>
      </div>
    </Footer>
  )
}

const Footer = styled.footer`
   width: 100%;
   color: #FFF;
   text-align: center;
   padding: 100px 0 50px;
`

const Link = styled.a`
  text-decoration: underline;
  color: #FFF;
  text-align: center;
  margin: 0 5px;
`

export default footer
