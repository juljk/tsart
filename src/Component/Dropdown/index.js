import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Dropdown extends Component {
    render() {
        return (            
            <div className={this.props.className}>                
                <Link className="PortfolioLink" to="/nightscapes">Nightscapes</Link>
                <Link className="PortfolioLink" to="/landscapes">Landscapes</Link>
                <Link className="PortfolioLink" to="/flowers">Flowers</Link>                            
            </div>
        )        
    };
};

export default Dropdown;