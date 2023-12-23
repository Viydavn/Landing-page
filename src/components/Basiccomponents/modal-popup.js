// Modal.js
import React from 'react';
import Form from './Form';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
      }
    
    const modalStyle = {
        transform: isOpen ?'translateY(0)':'translateY(100%)',
      };

  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal" style={modalStyle}>
        <div className='modal-header'>

        <div> <h2>Your Logo</h2>
         <h3>Let's Discuss Your Project</h3></div>
         <span className="close" onClick={onClose}>&times;</span>
         </div>
        <Form/>
            <p>Our Experts Will Get In Touch With You In Next 2 Hours</p>
      </div>
    </div>
  );
};

export default Modal;
