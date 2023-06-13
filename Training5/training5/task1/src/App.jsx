import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[#3C486B] text-[#F0F0F0] flex justify-center items-center'>
      <TodoForm />
    </div>
  )
}

export default App
