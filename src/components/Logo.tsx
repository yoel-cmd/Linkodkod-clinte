import "../style/Image.css"

export default function Logo(props:{src:string}){
    return(
        <img className="imgProfile" src={props.src} alt="" />
    )
}