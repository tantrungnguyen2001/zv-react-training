import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, toggle, update } from '../../Features/TodoSlice'


export default function TodoList({ search, isCompleted }) {
  const [isUpdated, setIsUpdated] = useState(false)
  const [id, setId] = useState(null)
  const [updateTitle, setUpdateTitle] = useState('')

  const todoList = useSelector(state => state.todos.tasks)

  const dispatch = useDispatch()

  return (
    <div className='w-[80%] m-auto'>
      {todoList.filter(todo => {
        return todo.title.toLowerCase().includes(search.toLowerCase())
      })
      .filter(todo => {
        if(isCompleted) {
          return todo.completed === isCompleted
        } 
        else return todo
      })
      .map(todo => (
        <div key={todo.id} className='border-2 p-2 rounded my-2'>
        <div className='flex items-center justify-between'>
          {/* Check box */}
          <input type="checkbox" 
            className='cursor-pointer' 
            checked={todo.completed} 
            onChange={() => dispatch(toggle({id: todo.id, completed: todo.completed}))}
          />
          {/* Title shows here */}
          <div className="flex-1 mx-2 cursor-auto">{todo.title}</div>

          {/* Update button */}
          <button className='' onClick={() => { 
            setId(todo.id)
            setIsUpdated(true) 
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 bg-[#F0F0F0] text-[#3C486B] rounded hover:bg-[#F9D949] hover:text-[#F0F0F0]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </button>

          {/* Delete button */}
          <button className='ml-2' onClick={() => dispatch(remove(todo.id))}>
            <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 bg-[#F0F0F0] text-[#3C486B] rounded hover:bg-[#F45050] hover:text-[#F0F0F0]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Input to update */}
        {isUpdated && id === todo.id && 
        <form className="flex items-center justify-between mt-2"
          onSubmit={(e) => { 
            e.preventDefault()
            if(updateTitle.length === 0) return
            dispatch(update({id: todo.id, title: updateTitle}))
            setUpdateTitle('')
            setIsUpdated(false) 
            }}
        >
          <input type="text" 
            className='rounded w-full focus:outline-none focus:outline-[#F0F0F0] text-[#3C486B] px-2'
            placeholder='Update title here'
            value={updateTitle}
            onChange={e => setUpdateTitle(e.target.value)}
          />
        </form>
        }
        </div>
      ))}
    </div>
  )
}
