import React, { Component } from 'react';
import './App.css';
import Images from './Component/Images';
import Header from './Component/Header';

// import Test from './Component/Test';

class App extends Component {
  render() {
    return (
      <div>
        <Header />        
        <Images />

        {/* <Test /> */}

      </div>
    );
  }
}

export default App;