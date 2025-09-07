import DataTime from "./Data.Time"
import Descripition from "./Description"
import Image from "./Image"
import Likse from "./Likse"



export default function Post(){
    
    return(
        <>
        <Image/>
        <Descripition/>
        <Likse/>
        <p>Full name</p>
        <DataTime/>
        </>
    )
}