import Post from "./components/Post";
import "./App.css";
import { posts } from "./utils/posts";

function App() {
  

  return (
    <>
     
        {posts.map((post)=>(
          <Post
          src={post.src}
          desc={post.desc}
          emoji={post.emoji}
          fullName={post.fullName}
          time={post.time}
          />
        ))}
        
    </>
  );
}

export default App;
