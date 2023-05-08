import React from 'react'
import './ModalContent.css'

export default function ModalContent({toggleModal}) {
  return (
    <div id='modal'>
      <div className="modal__content">
        <p>Some text...</p>
          <span 
            className="close"
            onClick={toggleModal}
          >close</span>
      </div>
    </div>
  )
}
