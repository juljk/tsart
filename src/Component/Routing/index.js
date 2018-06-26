import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Images from '../Images';
import InStock from '../InStock';
import About from '../About';
import Contact from '../Contact';
import Header from '../Header';

class Routing extends Component {
    render() {
        return (
            <Router>                
                <div>   
                <Header />    

                <Route exact path="/" component={Images} />
                <Route path="/instock" component={InStock} /> 
                <Route path="/about" component={About} /> 
                <Route path="/contact" component={Contact} />          
                </div>
            </Router>
    ) 
  }
}

export default Routing;