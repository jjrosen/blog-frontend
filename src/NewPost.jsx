export function NewPost(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    props.onCreate(params);
    form.reset();
  };
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Image URL: <input name="image" type="text" />
        </div>
        <div>
          Text: <input name="body" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
