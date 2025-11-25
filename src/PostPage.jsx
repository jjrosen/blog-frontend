import { NewPost } from "./NewPost";
import { Post } from "./Post";
import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
    });
  };

  const handleShow = (post) => {
    console.log("handleShow", post);
  };

  useEffect(handleIndex, []);
  return (
    <div>
      <NewPost />
      <Post />
      <PostsIndex postsProp={posts} onShow={handleShow} />
    </div>
  );
}
