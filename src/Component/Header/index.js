import React, { Component } from 'react';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div>
            <div className="header">               
                <div className="name">Tania Semaniuk</div>  
                <div className="gallery">GALLERY</div>            
                <div className="navigation">
                    <ul>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">In stok</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
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