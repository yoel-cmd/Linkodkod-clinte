import "../style/Image.css"
export default function Image(props:{src:string}){
    return (
        <>
        <span>
        <img  className="imgProfile" src={props.src} alt="" />
        </span>
        </>
    )
}