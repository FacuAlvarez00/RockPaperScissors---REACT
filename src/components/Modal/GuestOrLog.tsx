import React, { useState } from 'react'
import "./rules.css"



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
          </div>
        </div>
      )}
      
    </div>
  )
}

export default GuestOrLog 
