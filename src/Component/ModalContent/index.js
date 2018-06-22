import React, { Component } from 'react'
import './index.css';

class ModalContent extends Component {
  render() {
    const { src, onClick } = this.props;
    return (
      <div className="parent" onClick={onClick}>
        <img src={src} alt={src} />
      </div>
    )
  }
}

export default ModalContent;