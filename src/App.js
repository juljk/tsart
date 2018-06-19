import React, { Component } from 'react';
import './App.css';
import Image from './Component/Image';
import Header from './Component/Header';

// import ModalExampleControlled from './Component/Test';

class App extends Component {
  render() {
    return (
      <div>
        <Header />        
        <Image />
        {/* <ModalExampleControlled /> */}
      </div>
    );
  }
}

export default App;