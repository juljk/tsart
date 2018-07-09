import React, { Component } from 'react';
import './index.css';

// Додаємо модалку
import Modal from '../Modal';
import ModalContent from '../ModalContent';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false, url: ""};
      
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }
    
    handleShow(e) {       
        const { param } = e.target.dataset;
        this.setState({showModal: true, url: param});       
    }
      
    handleHide() {
        this.setState({showModal: false});
    }

    render() {        
        const { src, alt } = this.props;

        const modal = this.state.showModal 
            ? (
                <Modal>
                    <ModalContent onClick={this.handleHide} src={this.state.url} />            
                </Modal>
              )
            : null;

        return (
            <div>
                <div className="conPic">               
                    <img className="picture" src={src} alt={alt} data-param={src} onClick={this.handleShow} />
                    <div className="middle">
                        <div className="textPic">50X50</div>
                        <div className="textPic">2018</div>
                    </div>                
                </div>  
            {modal}
            </div>      
      );
    }
  }
  
  export default Image;