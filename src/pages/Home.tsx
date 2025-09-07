import { posts } from "../utils/posts.ts"
import Post from "../components/Post.tsx"
 
export default function Home(){

    return(
        <>
        {posts.map((post) => (
        <Post
          src={post.src}
          desc={post.desc}
          emoji={post.emoji}
          fullName={post.fullName}
          time={post.time}
        />
      ))}
      </>
    )
}