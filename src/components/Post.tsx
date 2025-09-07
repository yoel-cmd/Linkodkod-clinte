import DataTime from "./Data.Time";
import Descripition from "./Description";
import Image from "./Image";
import Likse from "./Likse";
import "../style/Post.css";

export default function Post(props: {
  src: string;
  desc: string;
  time: string;
  emoji: number;
  fullName: string;
}) {
  return (
    <>
      <span className="post">
        <Image src={props.src} />
        <Descripition desc={props.desc} />
        <p> by: {props.fullName}</p>
        <DataTime time={props.time} />
        <Likse emoji={props.emoji} />
      </span>
    </>
  );
}
