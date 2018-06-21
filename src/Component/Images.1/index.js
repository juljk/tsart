// import React, { Component } from 'react';
// import './index.css';
// import _ from 'underscore';

// import url from '../../Url/index';

// const dataUrl = _.chunk(url, url.length / 4);

// class Images extends Component {
//     render() {                
//       return (
//         <div className="row">         
//             <div className="column">
//                 { dataUrl[0].map(x => {
//                     return <div className="image"><img src={x} alt={x} /></div>
//                  }) }               
//             </div>      
//             <div className="column">
//                 { dataUrl[1].map(x => {
//                     return <div className="image"><img src={x} alt={x} /></div>
//                  }) }
//             </div> 
//             <div className="column">
//                 { dataUrl[2].map(x => {
//                     return <div className="image"><img src={x} alt={x} /></div>
//                  }) }
//             </div> 
//             <div className="column">    
//                 { dataUrl[3].map(x => {
//                     return <div className="image"><img src={x} alt={x} /></div>
//                  }) }
//             </div>              
//         </div>
//       );
//     }
//   }
  
//   export default Images;