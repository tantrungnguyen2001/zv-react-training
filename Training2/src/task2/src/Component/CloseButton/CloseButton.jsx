import './CloseButton.css'

export default function CloseButton(props) {
  return(<>
    <div className="close" onClick={() => props.toggle2()}>Close</div>
  </>)
}