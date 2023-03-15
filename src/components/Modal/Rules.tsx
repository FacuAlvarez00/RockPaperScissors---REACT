import React, { useState } from 'react'
import rulesSVG from "../../../src/assets/Rules/image-rules.svg"
import "./rules.css"



const Rules = () => {

    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };



  return (

    <div>
        <button onClick={toggleModal} className="btn-modal">
        RULES
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <img src={rulesSVG}/>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Rules 
