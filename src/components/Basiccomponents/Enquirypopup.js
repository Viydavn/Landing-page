// EnquiryPopUp.js
import React, { useEffect } from 'react';
import { Verified, Fire } from "./Image"

const EnquirpopUp = () => {
  useEffect(() => {
    showEnquiryPopUp();
  }, []);

  const showEnquiryPopUp = () => {
    const popUp = document.querySelector('.enquiry-pop-up');
    popUp.classList.add('show');
    setTimeout(() => {
      popUp.classList.remove('show');
    }, 5000); // Show for 5 seconds

    setTimeout(() => {
      showEnquiryPopUp();
    }, 10000); // Repeat after 10 seconds
  };

  return (
    <div className="enquiry-pop-up">
      <div className="content">
        <div className="enquiry-content-image">
          <Fire />
        </div>
        <div className="enquiry-content">
          <h4>1158 People In The Last 7 Days</h4>
          <p>Requested for Estimate</p>
          <Verified />
        </div>
      </div>
    </div>
  );
};

export default EnquirpopUp;
