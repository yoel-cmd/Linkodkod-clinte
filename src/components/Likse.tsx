import { useState } from "react"

export default function Likse(props:{emoji:number}){
    const[count,setCount]=useState(props.emoji)
   return(
    <>
    <button onClick={()=>{
        setCount((prev)=>prev+1)
    }}>👌 {count} </button>
    <p></p>
    </>
   ) 
}