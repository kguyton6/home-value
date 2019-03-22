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
  h1 {font-weight: bold; font-size: 60px; color: white; width: 55%; text-align: center; margin: 50px;}
`



const App = () => {
    return (
     <Main>
       <h1>Find Out What Your <br/> House Is Worth</h1>
       <Form />
     </Main>
    );
  }


export default App;
