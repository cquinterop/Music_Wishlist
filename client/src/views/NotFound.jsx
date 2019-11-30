import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const notFound = () => {
    return (
        <Btn>
            <Link to="/">
                Not Found! Go Back
            </Link>
        </Btn>
    )
}

const Btn = styled.button`
   width: 5%;
   padding: 1% 5%;
   border-radius: 10px;
   background-color: #6acc91;
`

export default notFound;
