import { useEffect, useState } from "react";
import Post from "../components/Post.tsx";
// import "../style/Home.css";
import { readAllPost } from "../utils/CRUD.ts";
import { type post } from "../components/Post.tsx";


export default function Home() {
    const [data, setData] = useState<post[]>([]);

useEffect(() => {
  async function fatchData() {
    const data = await readAllPost();
   const post= JSON.parse(data)
    
    setData(post);
  }
  fatchData();
}, []);
  return (
    <>
      <h1>hi from home</h1>
      <div className="posts">
        {data.map((post) => (
          <Post
            key={post.src}
            src={post.src}
            desc={post.desc}
            fullName={post.fullName}
            time={post.time}
            emoji={post.emoji}
          />
        ))}
      </div>
    </>
  );
}
