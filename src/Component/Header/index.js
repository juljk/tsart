import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (            
            <div className="header">
                <div className="name">Tania Semaniuk</div>
                <div className="gallery">GALLERY</div>
                <div className="navigation">                    
                    <Link to="#">Portfolio</Link>
                    <Link to="/instock">In stock</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>          
                </div>
            </div>
        )        
    };
};

export default Header;