import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-custom-primary">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <p className="h1 color-white" href="#">
                EduConecta
              </p>
              <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-auto">
                <li className="nav-item">
                  <Link to="/login">
                    <button className="nav-link color-white">Ingresar</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="Signup">
                    <button className="nav-link color-white">Registrarse</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
