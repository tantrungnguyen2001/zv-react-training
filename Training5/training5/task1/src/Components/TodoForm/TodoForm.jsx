import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import { useDispatch } from 'react-redux'
import { create } from '../../Features/TodoSlice'

export default function TodoForm() {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')
  const [isCompleted, setIsCompleted] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    
    if(input.length === 0) return
    dispatch(create(input))
    setInput('')
  }

  return (
    <div className='w-[40%] min-h-[80%] border-[#F0F0F0] border-2 rounded-lg'>
      <form onSubmit={e => handleSubmit(e)} className="w-[80%] flex flex-col items-center m-auto my-3">
        <input 
          type="text" 
          placeholder='Search...' 
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='w-[80%] px-4 rounded my-1 text-[#3C486B] focus:outline-none focus:outline-[#F0F0F0] text-lg'/>
        <input 
          type="text" 
          placeholder='Add...' 
          value={input} 
          onChange={e => setInput(e.target.value)}
          className='w-[80%] px-4 rounded my-1 text-[#3C486B] focus:outline-none focus:outline-[#F0F0F0] text-lg'/>
        <button 
          className='w-[80%] bg-[#3C486B] border-[#F0F0F0] border-2 rounded px-2 py-1 mt-1 hover:bg-[#F9D949] hover:text-[#3C486B]'
          type='submit'
        >Add Todo</button>
        <div className="flex items-center gap-1 my-2">
          <input type="checkbox" checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)} />
          <p>Show completed</p>
        </div>
        <div className="w-[90%] border-2 border-[#F0F0F0] rounded"></div>
      </form>
        <TodoList search={search} isCompleted={isCompleted}/>
    </div>
  )
}
