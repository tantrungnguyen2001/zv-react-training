import './App.css'
import Data from './Data/Data'
import Questions from './Questions'

export default function App() {
  const datacomp = Data.map((data, index)=>{
    return(
      <>
      <Questions
        index={index+1}
        q={data.q}
        a={data.a}
      />
      <div className='mb-24'></div>
      </>
    )
  })
  return (
    <div className='App'>
      <div className='question__title'>Training 2</div>
      <div className='question__form'>
        {datacomp}
      </div>
    </div>
  )
}