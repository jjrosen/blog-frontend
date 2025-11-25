export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>{props.postsProp.length} Similar Posts</h1>
      {props.postsProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>{post.body}</p>
          <button onClick={() => props.onShow(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
