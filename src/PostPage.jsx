import { NewPost } from "./NewPost";
import { Post } from "./Post";
import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";
export function PostPage() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);
  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
    });
  };

  const handleShow = (post) => {
    console.log("handleShow", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  useEffect(handleIndex, []);
  return (
    <div>
      <NewPost />
      <Post />
      <PostsIndex postsProp={posts} onShow={handleShow} />
      <Modal
        show={isPostsShowVisible}
        onClose={() => setIsPostsShowVisible(false)}
      >
        <PostShow post={currentPost} />
      </Modal>
    </div>
  );
}
