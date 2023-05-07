import { useState } from "react"
import './Modal.css'

export default function Modal(){
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
      setModal(!modal)
    }  

    return (
        <>
        <button 
            id='modal__btn' 
            onClick={toggleModal}
        >Press me</button>
    
        {modal && (
            <div id='modal'>
                <div className="modal__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias pariatur consectetur natus reiciendis autem illum asperiores, ratione delectus nihil perspiciatis ad odio fugit impedit animi aut consequuntur recusandae nobis deserunt cupiditate vel sequi neque eos error ullam. Minus aspernatur possimus eius beatae ullam quod, impedit, quisquam ratione aliquid amet eligendi.</p>
                    <span 
                        className="close"
                        onClick={toggleModal}
                    >close</span>
                </div>
            </div>
        )}
        </>
    )
}