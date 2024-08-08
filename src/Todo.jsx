import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeTodo } from "./counterSlice";



function Todo(){

    const data  = useSelector(state =>state.counter.todos)
    const dispatch = useDispatch()


    return(
        <>
        {
               data.map((a)=>(
                <li key={a.id}>
                  {a.text}
                  <button onClick={()=>dispatch(removeTodo(a.id))}>X</button>
                </li>
             ))

        }
      
        </>
    )
}

export default Todo