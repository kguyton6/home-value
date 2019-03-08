import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    font-size: 10px;
`
export const navbar = (
    <Nav>
           <Link to='/privacy' >Privacy Policy</Link>

    </Nav>
)