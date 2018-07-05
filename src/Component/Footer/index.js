import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (               
            <footer>
                <div class="text">Copyright © 2018 Tetiana  Semaniuk. All Rights Reserved.</div>
                <div class="social">       
                    <div class="icon instagram"></div>
                    <div class="icon facebook"></div>
                    <div class="icon etsy"></div>    
                </div>
            </footer>                      
        )        
    };
};

export default Footer;