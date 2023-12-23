
import React, { useState } from 'react';
import Modal from './Basiccomponents/modal-popup';

const Header = () => {
const [showNav, setShowNav] = useState(false);
const [showModal, setShowModal] = useState(false);

const toggleNav = () => {
  setShowNav(!showNav);
};

const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  

   return (
       <div className="header-container container">
           <div className="logo">Your Logo</div>
           <nav className={`navbar ${showNav ? 'show' : ''}`} id="navMenu">
               <ul className="nav-list" id="navList">
                   <li><a href="#" onClick={openModal}>Website Designing & Development</a></li>
                   <li><a href="#" onClick={openModal}>eCommerce Development</a></li>
                   <li><a href="#" onClick={openModal}>Digital Marketing</a></li>
               </ul>
           </nav>
           <div>
               <button className="btn" onClick={openModal}>REQUEST A CALLBACK</button>
           </div>
           <button className="navbar-toggle" onClick={toggleNav}id="toggleButton">☰</button>
           
           <Modal isOpen={showModal} onClose={closeModal} />
       </div>
   );
}
 // Call the function to set up the event listener
export default Header;