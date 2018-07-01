import React, { Component } from 'react';
import './index.css';
import ImageColumn from '../ImageColumn';

// Елементи з БД і їх обчислення
import _ from 'underscore';
import url from '../../Url/index';
const dataUrl = _.chunk(url, url.length / 4);

class Images extends Component {  
    render() {                
      return (
        <div>
          
          <div className="boxPalette">
            <img className="palette" src="https://image.ibb.co/gqJr5J/v.jpg" alt="palette" />
          </div>

          <div className="row"> 
              <ImageColumn dataurl={dataUrl[0]} />
              <ImageColumn dataurl={dataUrl[1]} />
              <ImageColumn dataurl={dataUrl[2]} />
              <ImageColumn dataurl={dataUrl[3]} />                        
          </div>
        </div>
      );
    }
  }
  
  export default Images;