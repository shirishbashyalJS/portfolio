export const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar navbar-dark p-4 navigation"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.43)" }}
    >
      <div className="container-fluid col-10">
        <a className="navbar-brand fs-2" href="#">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            className="navbar-nav ms-auto d-flex justify-content-between"
            style={{ width: "400px" }}
          >
            <li className="nav-item">
              <a
                className="nav-link active  fs-3"
                aria-current="page"
                href="#technology"
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  fs-3"
                aria-current="page"
                href="#project"
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  fs-3"
                aria-current="page"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  fs-3"
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
