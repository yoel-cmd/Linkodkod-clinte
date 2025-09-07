import "../style/Description.css"

export default function Descripition(props:{desc:string}) {
  return (
    <>
      <p className="textDescription">{props.desc}</p>
      
    </>
  );
}
