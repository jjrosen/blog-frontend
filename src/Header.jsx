export function Header() {
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                All Posts
              </a>
              <a className="nav-link" href="#">
                New Post
              </a>
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
      <title>Moms Around the World</title>
      {/* https://thumbs.dreamstime.com/z/mix-race-women-holding-hands-around-globe-international-friendship-concept-girls-surrounding-world-white-background-mix-race-women-140375167.jpg */}
    </header>
  );
}
