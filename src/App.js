import Header from "./components/Header.js";
import Main from "./components/Main.js";
import IdleModal from './components/Basiccomponents/Screenidelpop-up.js'
import './styles.css';
import Footer from "./components/Footer.js";
import {Verified} from "./components/Basiccomponents/Image.js"
// import './style.css';
import { useState,useEffect } from "react";
import EnquirypopUp from "./components/Basiccomponents/Enquirypopup.js";
function App() {
  // const [isIdle, setIsIdle] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // let idleTimer;

  // const handleIdle = () => {
  //   setIsIdle(true);
  // };

  // const resetIdleTimer = () => {
  //   clearTimeout(idleTimer);
  //   setIsIdle(false);

  //   // Set a new idle timer
  //   idleTimer = setTimeout(() => {
  //     setIsModalOpen(true);
  //   }, 10000); // 10 seconds
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   resetIdleTimer();
  // };

  // useEffect(() => {
  //   resetIdleTimer();

  //   window.addEventListener('mousemove', handleIdle);
  //   window.addEventListener('keydown', handleIdle);

  //   return () => {
  //     window.removeEventListener('mousemove', handleIdle);
  //     window.removeEventListener('keydown', handleIdle);
  //     clearTimeout(idleTimer);
  //   };
  // }, []); // Run once on mount


  return (
    <div className="App">
       {/* {isModalOpen && <IdleModal onClose={closeModal} />}
      {isIdle && <p>Screen is idle...</p>} */}
       <Header />
      <Main /> 
      <Footer/>
      <EnquirypopUp />
    </div>
  );
}
export default App;
