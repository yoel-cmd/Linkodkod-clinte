import posts from "../utils/posts.json";
import Post from "../components/Post.tsx";
import "../style/Home.css";


export default function Home() {
  return (
    <>
      

      <div className="posts">
      {posts.map((post) => (
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
