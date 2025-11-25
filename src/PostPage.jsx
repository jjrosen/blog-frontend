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

  const handleCreate = (params) => {
    console.log("handleCreate");
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      // let copiedPosts = Array.from(posts); This is the long way of writing this
      // copiedPosts.push(response.data);
      // setPosts(copiedPosts);
      setPosts([...posts, response.data]);
    });
  };

  useEffect(handleIndex, []);
  return (
    <div>
      <NewPost onCreate={handleCreate} />
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
