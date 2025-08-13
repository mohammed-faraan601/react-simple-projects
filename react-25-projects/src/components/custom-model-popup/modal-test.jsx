import React, { useState } from "react";
import Modal from "./modal";
import './modal.css'

function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleTogglePopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleTogglePopup} style={{backgroundColor:"green",color:"white",padding:"10px", border:"none", marginTop: "10px"}}>Open Model Popup</button>
      {showModalPopup && <Modal onClose={onClose} body={<div>Customized Body</div>}/>}
    </div>
  );
}

export default ModalTest;
