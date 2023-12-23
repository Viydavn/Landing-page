import React from 'react';

const IdleModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Idle Screen Alert</h2>
        <p>Your screen has been idle. Do you want to continue?</p>
      </div>
    </div>
  );
};

export default IdleModal;
