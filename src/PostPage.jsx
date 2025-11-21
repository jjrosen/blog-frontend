import { NewPost } from "./NewPost";
import { Post } from "./Post";
import { PostsIndex } from "./PostsIndex";
import axios from "axios";
export function PostPage() {
  let posts = [];

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      posts = response.data;
    });
  };

  return (
    <div>
      <NewPost />
      <button onClick={handleIndex}>All Posts</button>
      <Post />
      <PostsIndex postsProp={posts} />
    </div>
  );
}
