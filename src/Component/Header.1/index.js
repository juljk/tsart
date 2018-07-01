import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };

        this.Show = this.Show.bind(this);
        this.Hide = this.Hide.bind(this);
    }

    Show() {
        this.setState({ show: true });        
    }

    Hide() {
        this.setState({ show: false });        
    }

    render() {
        return (            
            <div className="header">
                <div className="name">Tania Semaniuk</div>
                <div className="gallery">GALLERY</div>
                <div className="navigation">       
                    <div onMouseOver={this.Show} onMouseLeave={this.Hide}>
                        <Link to="/" >Portfolio</Link>
                        { this.state.show 
                        ? 
                        <div className="dropdown-content">
                            {/* <Link to="#">All</Link> */}
                            <Link to="/nightscapes">Nightscapes</Link>
                            <Link to="/landscapes">Landscapes</Link>
                            <Link to="/flowers">Flowers</Link>                            
                        </div>
                        : null }    
                    </div>

                        { this.state.show
                        ? null 
                        : <div>
                            <Link to="/instock">In stock</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </div> }                 
                                 
                    
                    {/* <Link to="/instock">In stock</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>           */}
                </div>

                
            </div>
        )        
    };
};

export default Header;