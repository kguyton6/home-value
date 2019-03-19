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
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100vh;
`



const App = () => {
    return (
     <Main>
       <Form />
     </Main>
    );
  }


export default App;
