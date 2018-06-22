import React, { Component } from 'react';
import './App.css';

import Routing from './Component/Routing';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Routing />

        </div>
      </Router>
    );
  }
}

export default App;