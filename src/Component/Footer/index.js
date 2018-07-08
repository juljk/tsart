import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (               
            <footer>
                <div class="text">Copyright © 2018 Tetiana  Semaniuk. All Rights Reserved.</div>
                <div class="social">       
                    <a href="https://www.instagram.com/tania_sem_" target="_blank"><div class="icon instagram"></div></a>
                    <a href="https://www.facebook.com/tsemaniukart" target="_blank"><div class="icon facebook"></div></a>
                    <a href="https://www.etsy.com/shop/TSemaniukArtSpace" target="_blank"><div class="icon etsy"></div></a>   
                </div>
            </footer>                      
        )        
    };
};

export default Footer;