import React, { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal() {
  const [showModal, setshowModal] = useState(false)
  const handleShowModal = () => setshowModal(!showModal)

  useEffect(() => {
    if(showModal){
      document.addEventListener('keydown', detectKeyDown)
    }else{
      document.removeEventListener('keydown', detectKeyDown)
    }
  }, [showModal])
  
  console.log(showModal);

  const handleRemoveEventListener = () => {
    document.removeEventListener('keydown', detectKeyDown)
    handleShowModal()
  }

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
              onClick={handleRemoveEventListener}
            >&times;</button>
          </div>
        </div>
      </div>
    }
    </>
  )
}
