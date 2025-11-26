export function PostsIndex({ postsProp, onShow }) {
  return (
    <div id="posts-index">
      <h1>{postsProp.length} Similar Posts</h1>
      {postsProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>{post.body}</p>
          <button onClick={() => onShow(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
