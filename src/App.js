import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
      <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/contact' />
  
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
