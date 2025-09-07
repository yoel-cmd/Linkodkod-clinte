import "../style/Image.css"

export default function Logo(props:{src:string}){
    return(
        <img className="imgLogo" src={props.src} alt="" />
    )
}