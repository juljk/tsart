import React, { Component } from 'react';
import './index.css';
import ImageColumn from '../ImageColumn';

// Елементи з БД і їх обчислення
import _ from 'underscore';
import url from '../../Url/index';

// import urlDB from '../../Url/index';


const dataUrl = _.chunk(url, url.length / 4);

class Images extends Component {  
  // constructor(props) {
  //   super(props);
  //   this.props = props;
  //   this.state = {  filterURL: [], show: false };
    
  // }
  // componentDidMount() {     
  //   // alert( this.props.filters );
  //   const filterArray = urlDB.filter( x => { return x.category === (this.props.filters ? this.props.filters : true) } ); 
    
  //   const dataUrl = _.chunk(filterArray, filterArray.length / 4);
  //   this.setState({ filterURL: dataUrl, show: true });
  // };

    render() {   
      // const { filterURL, show } = this.state;                  
      return (
        // show ?
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
        // : <div>LOADING...</div>
      );
    }
  }
  
  export default Images;