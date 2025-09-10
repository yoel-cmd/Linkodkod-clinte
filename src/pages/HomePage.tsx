//---------------------------------------------imports----------------------------------------------
import { useEffect, useState } from "react";
import {  readAllPostAuth } from "../utils/CRUD.ts";
import Post from "../components/Post.tsx";
import "../style/Home.css";
import type post from "../interface/post.typr.ts";
import { Link } from "react-router";
import { loadLS } from "../utils/LocalStoreg.ts";
//---------------------------------------------start page--------------------------------------------
export default function Home() {
  const [data, setData] = useState<post[]>([]);
  const [err, setErr] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const user = loadLS("auth");
  console.log("userr:", user);

  //----------------------------------------------use effect -------------------------------------------
  useEffect(() => {
    async function fatchData() {
      try {
        const data: any = await readAllPostAuth(user);
        console.log("TO:", typeof data);

        const posts = await readAllPostAuth(user);
        setData(posts);

        setLoading(true);
      } catch (error: unknown) {
        setErr(error);
      }
    }
    fatchData();
  }, [loading]);
  
  //-----------------------------------------------return-------------------------------------------------
  if (err) {
    return (
      <>
        <h1>{err?.message}</h1>
      </>
    );
  } else if (!loading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  } else {
    return (
      <>
        {/* What I did here is that at the time of creation, I create a link for each post that takes it to the path I defined in the APP that activates a component that returns it only. */}
        <div className="posts">
          {data.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <Post
                id={post.id}
                src={post.src}
                desc={post.desc}
                fullName={post.fullName}
                time={post.time}
                emoji={post.emoji}
              />
            </Link>
          ))}
        </div>
      </>
    );
  }
}
