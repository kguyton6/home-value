import React from 'react';
import Form from './Form'
import bg1 from './assets/bg1.jpg'
import styled from 'styled-components'

const Main = styled.main`
 height: 100vh;
  width: 100vw;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  h1 {font-size: 60px; color: white; font-weight: 600; width: 70%; text-align: center; margin: 50px 50px 10px 50px; font-family: Verdana, Geneva, Tahoma, sans-serif; line-height: 50px;}
  h1 + h4 {font-size: 20px; font-weight: 400; color: white; margin-bottom: 50px;}
 h4 b {font-weight: 700; }
  @media (max-width: 750px){
    h1 {font-size: 48px; width: 90%;}
    h1 + h4 {font-size: 15px;}
  }
  @media (max-width: 450px){
    h1 {font-size: 36px; line-height: 40px;}
  }
`

// font-family: 'Montserrat', sans-serif;
// font-family: 'Paytone One', sans-serif;
// font-family: 'Alegreya Sans SC', sans-serif;
// font-family: 'Racing Sans One', cursive;
// font-family: 'Goblin One', cursive;

const App = () => {
    return (
     <Main>
       <h1>What's Your Home Worth?</h1> 
       <h4> Get the market value of your home for <b >FREE</b> </h4>
       <Form />
    
     </Main>
    );
  }


export default App;
