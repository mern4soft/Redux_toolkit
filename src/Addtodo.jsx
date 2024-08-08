import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtodo } from "./counterSlice";






function Addtodos(){

    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    // function addTodoHandle(e){
    //     console.log('dsf');
    //     e.preventDefault()
    //     dispatch(Addtodo({text:input}))
    //     setInput(' ')

    // }
    return(
        <>
        sdfsdf


            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <input type="button" value='add' onClick={()=>dispatch(Addtodo(input))}/>
        
        </>
    )
}

export default Addtodos