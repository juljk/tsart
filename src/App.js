import React, { Component } from 'react';
import './App.css';
import Image from './Component/Image';

import Test from './Component/Test';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>        
        <Image />
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;