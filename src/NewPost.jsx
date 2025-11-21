export function NewPost() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Author: <input type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
