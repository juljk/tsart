import React, { Component } from 'react';
import './index.css';

import url from '../../Url/index';

class Test extends Component {
    render() {                
      return (
        <div className="container">
            { url.map(x => {
                return <div className="image"><img src={x} alt={x}/></div>
            }) }            
        </div>
      );
    }
};

export default Test;