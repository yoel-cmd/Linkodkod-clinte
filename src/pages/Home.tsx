import { useEffect, useState } from "react";
import Post from "../components/Post.tsx";
import "../style/Home.css";
import { readAllPost } from "../utils/CRUD.ts";
import { type post } from "../components/Post.tsx";
import { Link } from "react-router";

export default function Home() {
  const [data, setData] = useState<post[]>([]);
  const [err, setErr] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fatchData() {
      try {
        const data = await readAllPost();
        const post = JSON.parse(data);
        setData(post);
        setLoading(true);
      } catch (error: unknown) {
        setErr(error);
      }
    }

    fatchData();
  }, [loading]);
  console.log("err is :", err);

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
