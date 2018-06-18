import React, { Component } from 'react';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div>
            <div className="header">               
                {/* <div className="name">Tania Semaniuk</div>   */}
                {/* <div className="gallery">GALLERY</div>             */}
                <p className="name">Tania Semaniuk</p>
                <p className="gallery">GALLERY</p>
                <div className="navigation">
                    
                        <a href="#">Portfolio</a>
                        <a href="#">In stok</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    
                </div>                
            </div>
                <div className="imageHeader">
                    <div className="contentImageHeader"></div>
                </div>
            </div>
        )        
    };
};

export default Header;