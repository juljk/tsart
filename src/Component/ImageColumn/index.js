import React, { Component } from 'react';
import './index.css';
import Image from '../Image';

class ImageColumn extends Component {
    constructor(props) {
        super(props);
    }
    render() {        
        const { dataurl } = this.props;
        return (
            <div className="column">
                { dataurl.map(item => { 
                    return (
                        <div className="image">
                            <Image src={item} alt={item} />
                        </div>
                    )                    
                }) }               
            </div>
        );
    }
  }
  
  export default ImageColumn;