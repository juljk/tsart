import React, { Component } from 'react';
import './index.css';

class Contact extends Component {    
      render() {
        return (
          <div>
            <div className="textForm">Please feel free to email us with your inquiry. We will respond as soon as possible.</div>
            <div className="containerForm">
              <form autoComplete="off" action="https://formspree.io/julikjulik22@gmail.com"
                    method="POST">

                  <input type="text" id="name" name="Name" placeholder="Name" />
                  <input type="email" id="email" name="Email" placeholder="Email" required />
                  <input type="number" id="phone" name="Phone" placeholder="Phone" />
                  <textarea id="subject" name="Message" placeholder="Message..."></textarea>
                  
                  <input type="hidden" name="_next" value="http://localhost:3000/contact" />
                  <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        );
      }
};

export default Contact;