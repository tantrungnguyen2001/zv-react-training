import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {id: 1, title: 'Harry Porter', completed: false},
    {id: 2, title: 'Transformers', completed: true},
    {id: 3, title: 'Supaider man', completed: false},
  ]
}

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    create: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false
      })
    },
    toggle: (state, action) => {
      state.tasks.map(task => {
        if(task.id === action.payload.id) task.completed = !action.payload.completed
      })
    },
    update: (state, action) => {
      state.tasks.map(task => {
        if(task.id === action.payload.id) task.title = action.payload.title
      })
    },
    remove: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
  },
})

export const { create, toggle, update, remove } = TodoSlice.actions

export default TodoSlice.reducer