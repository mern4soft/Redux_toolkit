import { createSlice ,nanoid} from "@reduxjs/toolkit";
import { act } from "react";



const initialState = {
  value: 0,
  todos:[{},{},{}]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      if (state.value == 0) {
        state.value = 0

      } else {
        state.value -= 1
      }

    },
    Addtodo:(state,action) =>{
      console.log(action);
      const todo={
        id:nanoid(),
        text:action.payload
      }
      state.todos.push(todo)
    },
    removeTodo:(state,action) =>{
      console.log(action);
      
      state.todos = state.todos.filter((todo)=>todo.id!=action.payload)
    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,Addtodo,removeTodo } = counterSlice.actions

export default counterSlice.reducer