import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';

class Header extends Component {
    render() {
        return (            
            <div className="header">
                <div className="name">Tania Semaniuk</div>
                <div className="gallery">GALLERY</div>
                <div className="navigation"> 

                    <div className="dropdown">
                        <Link className="MenuLink portfolio" to="/">Portfolio</Link>
                        <Dropdown className="dropdown-content" />
                    </div>
                    
                    <Link className="MenuLink" to="/instock">In stock</Link>
                    <Link className="MenuLink" to="/about">About</Link>
                    <Link className="MenuLink lastLink" to="/contact">Contact</Link>          
                </div>

                
            </div>
        )        
    };
};

export default Header;