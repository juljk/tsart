import React, { Component } from 'react';
import './App.css';
import Image from './Component/Image';
import Header from './Component/Header';

// import Test from './Component/Test';

class App extends Component {
  render() {
    return (
      <div>
        <Header />        
        <Image />
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;