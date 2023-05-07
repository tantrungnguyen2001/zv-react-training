import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <>
    <button id='modal__btn' onClick={() => props.toggle1()}>Press me</button>
    </>
  )
}
