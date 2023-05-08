import { React, Component } from 'react'
import './Modal.css'

export default class Modal extends Component {
  state = {
    show: false
  }

  handleShow = () => {
    this.setState(prevState => {
      return {
        show: prevState.show === false ? true : false
      }
    })
  }
  render(){
    return (
      <>
      <button className="myBtn" onClick={this.handleShow}>Open Modal</button>

      {this.state.show ? 
        <div className="modal">
          <div className='modal__background'>
            <div className="modal__content">
              <p>Some text in the Modal..</p>
              <button className="close" onClick={this.handleShow}>&times;</button>
            </div>
          </div>
        </div>
      : <></>}
      </>
    )
  }
}
