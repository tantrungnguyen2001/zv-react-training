import React, { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal() {
  const [showModal, setshowModal] = useState(false)
  const handleShowModal = () => setshowModal(!showModal)

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
    
    console.log(showModal);
  }, [])

  const detectKeyDown = (e) => {
    if(e.key == ' ') console.log('Key Pressed: Spacebar')
    else console.log('Key Pressed: ' ,e.key)
  }
  
  return (
    <>
    <button 
      className='modal__btn'
      onClick={handleShowModal}
    >Click me!</button>

    {showModal && 
      <div className='modal'>
        <div className='modal__background'>
          <div className='modal__content'>
            <textarea  
              className='modal__input'
              // value={}
            />
            <button 
              className='modal__close' 
              onClick={handleShowModal}
            >&times;</button>
          </div>
        </div>
      </div>
    }
    </>
  )
}
