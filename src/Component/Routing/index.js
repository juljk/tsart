import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Images from '../Images';
import InStock from '../InStock';
import About from '../About';
import Contact from '../Contact';

// import Header from '../Header';
// import Header from '../Header.1';
import Header from '../Header.2';

import Footer from '../Footer';

import Nightscapes from '../Nightscapes';
import Landscapes from '../Landscapes';
import Flowers from '../Flowers';

class Routing extends Component {
    render() {
        return (
            <Router>                
                <div>   
                <Header />    

                <Route exact path="/" component={Images} />
                <Route exact path="/nightscapes" component={Nightscapes} />
                <Route exact path="/landscapes" component={Landscapes} />
                <Route exact path="/flowers" component={Flowers} />
                <Route path="/instock" component={InStock} /> 
                <Route path="/about" component={About} /> 
                <Route path="/contact" component={Contact} />  

                <Footer />         
                </div>
            </Router>
    ) 
  }
}

export default Routing;