import React from 'react';
import {Button1} from './Button';

const DialerButton = () => {
  const handleDialerButtonClick = () => {
    const phoneNumber = '1234567890'; // Replace with your actual phone number
    const dialerUrl = `tel:${phoneNumber}`;

    window.location.href = dialerUrl;
  };

  return (
    <Button1 name={"999999999"} stylee = {{bgcolor: "white" , color: "#AA4054", borderr: "1px solid #AA4054", boxshadow: "5px 5px 10px 0 rgba(68.00000000000003,41,190,.12156862745098039)", fontfamily:`"Montserrat",Sans-serif`, borderradius:"10px",  fontsize: "18px",fontweight: "600",letterspacing: "1.2px"}} onclick={handleDialerButtonClick}/>
  );
};

export default DialerButton;