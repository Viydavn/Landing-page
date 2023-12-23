
import Modal from './modal-popup';
import { useState } from 'react';
const Button = ({name,stylee}) =>{
    const {bgcolor, color ,borderr,boxshadow,fontfamily, borderradius,fontsize,fontweight,letterspacing} = stylee;
    return(
        <button style={{ backgroundColor: bgcolor,
            color:color,
            border: borderr,
            boxShadow: boxshadow,
            borderRadius: borderradius,
            fontFamily: fontfamily,
            fontSize: fontsize,
            fontWeight: fontweight,
            letterSpacing: letterspacing}}>{name}</button>
    )
}


export const Button1 = ({name,stylee,onclick}) =>{
    const {bgcolor, color ,borderr,boxshadow,fontfamily, borderradius,fontsize,fontweight,letterspacing} = stylee;
    return(
        <button style={{ backgroundColor: bgcolor,
            color:color,
            border: borderr,
            boxShadow: boxshadow,
            borderRadius: borderradius,
            fontFamily: fontfamily,
            fontSize: fontsize,
            fontWeight: fontweight,
            letterSpacing: letterspacing}} onClick={onclick}>{name}</button>
    )
}

export const Button2 = ({name,stylee}) =>{
    const [showModal, setShowModal] = useState(false);
    const {bgcolor, color ,borderr,boxshadow,fontfamily, borderradius,fontsize,fontweight,letterspacing} = stylee;
    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    return(
        <>
        <button style={{ backgroundColor: bgcolor,
            color:color,
            border: borderr,
            boxShadow: boxshadow,
            borderRadius: borderradius,
            fontFamily: fontfamily,
            fontSize: fontsize,
            fontWeight: fontweight,
            letterSpacing: letterspacing}} onClick={openModal}>{name}</button>
            <Modal isOpen={showModal} onClose={closeModal}/>
            </>
            )
}


export default Button;