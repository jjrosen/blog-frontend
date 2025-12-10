import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";
export function Header() {
  const email = localStorage.getItem("email");
  return (
    <header>
      <nav
        className="navbar bg-primary navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MATW
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <a className="nav-link" href="/posts">
                All Posts
              </a>
              <Link className="nav-link" to="/posts/new">
                New Post
              </Link>
              {/* <a className="nav-link disabled" aria-disabled="true"></a>
              <a href="#"></a> */}
              {email ? (
                <>
                  <span> | Logged in as {email} | </span>
                  <LogoutLink />
                </>
              ) : (
                <>
                  <span> | </span>
                  <Link className="nav-link" to="signup">
                    Signup
                  </Link>
                  <span> | </span>
                  <Link className="nav-link" to="login">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <title>Moms Around the World</title>
      {/* https://thumbs.dreamstime.com/z/mix-race-women-holding-hands-around-globe-international-friendship-concept-girls-surrounding-world-white-background-mix-race-women-140375167.jpg */}
    </header>
  );
}
