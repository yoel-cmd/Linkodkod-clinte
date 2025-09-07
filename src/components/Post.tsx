import DataTime from "./Data.Time"
import Descripition from "./Description"
import Image from "./Image"
import Likse from "./Likse"



export default function Post(props:{src:string,desc:string,time:string,imoji:string,fullName:string}){
    
    return(
        <>
        <span id="post">
        <Image src={props.src} />
        <Descripition desc={props.desc}/>
        <Likse imoji={props.imoji}/>
        <p>{props.fullName}</p>
        <DataTime time={props.time}/>
        </span>
        </>
    )
}