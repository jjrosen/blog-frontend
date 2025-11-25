export function PostShow(props) {
  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <img src={props.post.image} alt="" />
      <p> {props.post.body}</p>
    </div>
  );
}
