import DataTime from "./Data.Time";
import Descripition from "./Description";
import Image from "./Image";
import Likse from "./Likse";
import "../style/Post.css";
import type post from "../interface/post.typr.ts"


export default function Post(props: post) {
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
