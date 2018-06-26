import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (            
            <div className="about">
                <div className="Photo">
                
                    <img src="https://image.ibb.co/fHOD5T/ava.jpg
                    https://image.ibb.co/cZt2zo/ava_Origin.jpg" alt="pic" />
                
                    
                    <div className="born">
                    <br />
                    Tetiana Semaniuk<br />
                    January 1997<br />
                    Ternopil, Ukraine<br /><br />
                    </div>
                </div>
                
                <div className="Text">
                Hello! My name is Tania, and I'm a self-taught painter.<br /><br />

                I'm having a lot of fun painting water, mountains. night sky and milky way. 
                I hope my art evokes a sense of curiosity, nostalgia and happiness within you. I work hard to make each piece as unique and intriguing as possible.<br /><br />

                I'd love to work with you to preserve a memory of your own. If you have a photo, or just a picture in your mind, we can make it come to life. Please message me for a custom piece! Beside that, <Link className="link" to="/instock">in stock</Link> you can see all paintings ready to hand on your wall.<br /><br />

                If you have any questions, please, feel free to <Link className="link" to="/contact">contact</Link> with me. 
                Thank you very much for visiting and have a nice day!
                </div>
            </div>
        )        
    };
};

export default About;

