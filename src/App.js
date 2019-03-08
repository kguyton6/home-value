import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import {Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className='App'>
      <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/contact' />
  
      </Switch>
      </div>
    );
  }
}

export default App;
