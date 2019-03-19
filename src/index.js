import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyD_Da04MRgTlny-OiOTm4jZMXkpXLF_pZA",
    authDomain: "your-home-value.firebaseapp.com",
    databaseURL: "https://your-home-value.firebaseio.com",
    projectId: "your-home-value",
    storageBucket: "your-home-value.appspot.com",
    messagingSenderId: "291806826783"
  };
  firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker.unregister();