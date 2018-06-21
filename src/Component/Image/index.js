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
        console.log(param);
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
                <img className="picture" src={src} alt={alt} onClick={this.handleShow} data-param={src}/>
                {modal}
            </div>        
      );
    }
  }
  
  export default Image;