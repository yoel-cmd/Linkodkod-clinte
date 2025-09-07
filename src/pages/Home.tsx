import posts from "../utils/posts.json";
import Post from "../components/Post.tsx";
import "../style/Home.css";
import Logo from "../components/Logo.tsx";

export default function Home() {
  return (
    <>
      <header className="header">
        <p className="slogen">
          Building tomorrow's digital world, one line at a time
        </p>
        <Logo src="../src/assets/image/Logo.jpeg" />
      </header>
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
