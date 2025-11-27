export function NewPost({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    onCreate(params);
    form.reset();
  };
  return (
    <div>
      <div id="posts-new">
        <h1>New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            Title: <input name="title" type="text" />
          </div>
          <div className="mb-3">
            Image URL: <input name="image" type="text" />
          </div>
          <div className="mb-3">
            Text: <input name="body" type="text" />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Post
          </button>
        </form>
        {/* <img
          src="https://thumbs.dreamstime.com/z/mix-race-women-holding-hands-around-globe-international-friendship-concept-girls-surrounding-world-white-background-mix-race-women-140375167.jpg"
          class="rounded float-end"
          alt="..."
        ></img> */}
      </div>
    </div>
  );
}
