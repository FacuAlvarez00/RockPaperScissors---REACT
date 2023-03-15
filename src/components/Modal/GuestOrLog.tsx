import React, { useState } from 'react'
import Swal from "sweetalert2";
import "./rules.css"
import { Link } from 'react-router-dom';



const GuestOrLog = () => {

    const [modal, setModal] = useState(true);

 const toggleModal = () => {
    setModal(!modal);
  };
 

  return (

    <div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Are you playing as a guest or you want to log in?</h2>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            <div>
                <Link to="/signin">
                    <button onClick={toggleModal}>Yes</button>
                </Link>
                
                <button onClick={toggleModal}>No, i want to play as guest</button>
            </div>
            
          </div>
        </div>
      )}
      
    </div>
  )
}

export default GuestOrLog 
