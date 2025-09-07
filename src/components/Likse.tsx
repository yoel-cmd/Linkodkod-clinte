import { useState } from "react"
import "../style/Likse.css"

export default function Likse(props:{emoji:number}){
    const[count,setCount]=useState(props.emoji)
   return(
    <>
    <button className="btnLike" onClick={()=>{
        setCount((prev)=>prev+1)
    }}>👌 {count} </button>
    <p></p>
    </>
   ) 
}