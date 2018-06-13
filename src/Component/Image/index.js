import React, { Component } from 'react';
import './index.css';
import _ from 'underscore';

const url = [
    'https://image.ibb.co/gbK3fJ/1.jpg',
    'https://image.ibb.co/fbCZny/4.jpg',
    'https://image.ibb.co/k2qb0J/6.jpg',
    'https://image.ibb.co/gVd77y/7.jpg',
    'https://image.ibb.co/f79VSy/8.jpg',
    'https://image.ibb.co/hEh60J/9.jpg',
    'https://image.ibb.co/jx6oEd/11.jpg',
    'https://image.ibb.co/doMoEd/12.jpg',
    'https://image.ibb.co/nhJqSy/14.jpg',
    'https://image.ibb.co/iH31Zd/15.jpg',
    'https://image.ibb.co/j6jKLJ/16.jpg',
    'https://image.ibb.co/bX260J/17.jpg',
    'https://image.ibb.co/jxF4ny/21.jpg',
    'https://image.ibb.co/cQMASy/22.jpg',
    'https://image.ibb.co/ebLR0J/25.jpg',
    'https://image.ibb.co/ch9aud/26.jpg',
    'https://image.ibb.co/fbqtfJ/27.jpg',
    'https://image.ibb.co/ej81Zd/28.jpg',
    'https://image.ibb.co/n8zVSy/29.jpg',
    'https://image.ibb.co/dKktfJ/30.jpg',
    'https://image.ibb.co/jNAR0J/31.jpg',
    'https://image.ibb.co/k2JqSy/32.jpg',
    'https://image.ibb.co/dryDfJ/40.jpg',
    'https://image.ibb.co/gpDeLJ/42.jpg',
    'https://image.ibb.co/eHOPny/43.jpg',
    'https://image.ibb.co/cFhH7y/44.jpg',
    'https://image.ibb.co/g9agZd/45.jpg',
    'https://image.ibb.co/k1qtfJ/50.jpg',
    'https://image.ibb.co/g2PKLJ/51.jpg',
    'https://image.ibb.co/juh60J/54.jpg',
    'https://image.ibb.co/m6em0J/55.jpg',
    'https://image.ibb.co/jvFgZd/56.jpg',
    'https://image.ibb.co/gyYqSy/57.jpg',
    'https://image.ibb.co/cdkgZd/58.jpg',
    'https://image.ibb.co/heWASy/59.jpg',
    'https://image.ibb.co/gQrYfJ/60.jpg',
    'https://image.ibb.co/k3DPny/61.jpg',
    'https://image.ibb.co/mEDeLJ/62.jpg',
    'https://image.ibb.co/nQCvud/63.jpg',
    'https://image.ibb.co/kc4x7y/64.jpg'    
];

const dataUrl = _.chunk(url, url.length / 4);

class Image extends Component {
    render() {                
      return (
        <div className="row"> 
            <div className="column">
                { dataUrl[0].map(x => {
                    return <img src={x} alt={x} />
                 }) }               
            </div>      
            <div className="column">
                { dataUrl[1].map(x => {
                    return <img src={x} alt={x} />
                 }) }
            </div> 
            <div className="column">
                { dataUrl[2].map(x => {
                    return <img src={x} alt={x} />
                 }) }
            </div> 
            <div className="column">    
                { dataUrl[3].map(x => {
                    return <img src={x} alt={x} />
                 }) }
            </div>   
        </div>
      );
    }
  }
  
  export default Image;