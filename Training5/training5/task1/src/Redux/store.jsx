import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../Features/TodoSlice'

const store = configureStore({
  reducer: {
    todos: TodoReducer
  }
})

export default store