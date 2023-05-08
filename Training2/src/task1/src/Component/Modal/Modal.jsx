import { useState } from "react"
import './Modal.css'
import ModalContent from "../ModalContent/ModalContent"

export default function Modal(){
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    }  

    return (
        <>
        <button 
            id='modal__btn' 
            onClick={toggleModal}
        >Press me</button>

        {isOpenModal && <ModalContent toggleModal={toggleModal}/>}
        </>
    )
}