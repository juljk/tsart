import React, { Component } from 'react';
import './index.css';
import _ from 'underscore';
import MediaQuery from 'react-responsive';

import url from '../../Url/index';

const dataUrl = _.chunk(url, url.length / 4);
const dataUrl800 = _.chunk(url, url.length / 2);

class Image extends Component {
    render() {                
      return (
        <div className="row"> 
        {/* <MediaQuery minDeviceWidth={1224}> */}
            {/* <MediaQuery  maxWidth={1000}>                
                <div className="column">
                    { dataUrl800[0].map(x => {
                        return <div className="image"><a href={x}><img src={x} alt={x} /></a></div>
                    }) }               
                </div>      
                <div className="column">
                    { dataUrl800[1].map(x => {
                        return <div className="image"><img src={x} alt={x} /></div>
                    }) }
                </div> 
            </MediaQuery> */}

            {/* <MediaQuery  maxWidth={600}> 
                <div className="column">
                    { url.map(x => {
                        return <div className="image"><a href={x}><img src={x} alt={x} /></a></div>
                    }) }               
                </div> 
            </MediaQuery> */}

            {/* <MediaQuery minWidth={600}> */}
            <div className="column">
                { dataUrl[0].map(x => {
                    return <div className="image"><img src={x} alt={x} /></div>
                 }) }               
            </div>      
            <div className="column">
                { dataUrl[1].map(x => {
                    return <div className="image"><img src={x} alt={x} /></div>
                 }) }
            </div> 
            <div className="column">
                { dataUrl[2].map(x => {
                    return <div className="image"><img src={x} alt={x} /></div>
                 }) }
            </div> 
            <div className="column">    
                { dataUrl[3].map(x => {
                    return <div className="image"><img src={x} alt={x} /></div>
                 }) }
            </div>   
            {/* </MediaQuery> */}
        {/* </MediaQuery>             */}
        </div>
      );
    }
  }
  
  export default Image;