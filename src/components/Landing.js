import React from 'react'
import Banner from './Banner';
import styled from 'styled-components'
import bg1 from '../assets/bg1.jpg'


const Main = styled.main`
 height: 100vh;
  width: 100vw;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100vh;
`


function Landing(){
  
    return (

        <Main>

        <Banner />

        </Main>

    )

}

export default Landing