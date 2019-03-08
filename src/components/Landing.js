import React from 'react'
import Banner from './Banner';
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100vh;
`


const Landing = () => {
    return (
        <Main>

        <Banner />

        </Main>
    )

}

export default Landing