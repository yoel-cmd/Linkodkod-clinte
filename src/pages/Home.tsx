import posts from "../utils/posts.json";
import Post from "../components/Post.tsx";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      {posts.map((post) => (
        <div className="posts">
          <Post
            src={post.src}
            desc={post.desc}
            emoji={post.emoji}
            fullName={post.fullName}
            time={post.time}
          />
        </div>
      ))}
    </>
  );
}
