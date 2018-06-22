import React, { Component } from 'react';
import './index.css';

class Header extends Component {
    render() {
        return (            
            <div className="header">
                <div className="name">Tania Semaniuk</div>
                <div className="gallery">GALLERY</div>
                <div className="navigation">       
                    <a href="/">Portfolio</a>
                    <a href="/instock">In stock</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>          
                </div>                           
            
                {/* <div className="imageHeader">
                    <div className="contentImageHeader"></div>
                </div> */}
            </div>
        )        
    };
};

export default Header;