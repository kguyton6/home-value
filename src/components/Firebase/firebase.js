import app from 'firebase/app';

var config = {
    apiKey: "AIzaSyD_Da04MRgTlny-OiOTm4jZMXkpXLF_pZA",
    authDomain: "your-home-value.firebaseapp.com",
    databaseURL: "https://your-home-value.firebaseio.com",
    projectId: "your-home-value",
    storageBucket: "your-home-value.appspot.com",
    messagingSenderId: "291806826783"
  };

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;