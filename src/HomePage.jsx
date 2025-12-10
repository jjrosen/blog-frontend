import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Welcome to Moms Around the World</h1>
      <Link to="/posts"> View All Posts</Link>
    </div>
  );
}
