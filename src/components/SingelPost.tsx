import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { readPostById } from "../utils/CRUD";
import Post, { type post } from "../components/Post.tsx";

export default function SingelPost() {
  {/* I take the id from the URL */}
  const {id} = useParams<any>();  
  const [post, setPost] = useState<post | null>(null);
  const [err, setErr] = useState<unknown>(null);
  useEffect(() => {
    async function feachData() {
      try {
        const post = await readPostById(id);
        setPost(post);
      } catch (error) {
        setErr(error);
      }
    }
    feachData();
  }, []);

  if (err) {
    return (
      <>
        <h1>{err?.message}</h1>
      </>
    );
  }  else {
    return (
      <>
        <div className="posts">
          {post&&<Post key={post.id} id={post.id} src={post.src} desc={post.desc} fullName={post.fullName} time={post.time} emoji={post.emoji}/>}</div>
      </>
    );
  }
}
