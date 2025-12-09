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
    axios.get("/posts.json").then((response) => {
      setPosts(response.data);
    });
  };

  const handleShow = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleCreate = (params) => {
    axios.post("/posts.json", params).then((response) => {
      // let copiedPosts = Array.from(posts); This is the long way of writing this
      // copiedPosts.push(response.data);
      // setPosts(copiedPosts);
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdate = (post, params) => {
    axios.patch(`/posts/${post.id}.json`, params).then((response) => {
      setPosts(
        posts.map((p) => (p.id === response.data.id ? response.data : p))
      );
      setIsPostsShowVisible(false);
    });
  };

  const handleDestroy = (post) => {
    axios.delete(`/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      setIsPostsShowVisible(false);
    });
  };

  useEffect(handleIndex, []);
  return (
    <div className="container">
      <NewPost onCreate={handleCreate} />
      {/* <Post /> */}
      <PostsIndex postsProp={posts} onShow={handleShow} />
      <Modal
        show={isPostsShowVisible}
        onClose={() => setIsPostsShowVisible(false)}
      >
        <PostShow
          post={currentPost}
          onUpdate={handleUpdate}
          onDestroy={handleDestroy}
        />
      </Modal>
    </div>
  );
}
