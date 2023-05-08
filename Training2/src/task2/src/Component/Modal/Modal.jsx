import { useState } from "react"
import './Modal.css'
import CloseButton from "../CloseButton/CloseButton"
import Button from "../Button/Button"

export default function Modal(){
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleModal = () => {
      setIsOpenModal(!isOpenModal)
    }  

    return (
        <>
        <Button toggle1={toggleModal}/>
    
        {isOpenModal && (
            <div id='isOpenModal' >
                <div className="modal__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias pariatur consectetur natus reiciendis autem illum asperiores, ratione delectus nihil perspiciatis ad odio fugit impedit animi aut consequuntur recusandae nobis deserunt cupiditate vel sequi neque eos error ullam. Minus aspernatur possimus eius beatae ullam quod, impedit, quisquam ratione aliquid amet eligendi.</p>
                    
                    <CloseButton toggle2={toggleModal}/>
                </div>
            </div>
        )}
        </>
    )
}