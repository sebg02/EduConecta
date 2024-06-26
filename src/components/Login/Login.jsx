import SimpleHeader from "../General/SimpleHeader.jsx";
import Footer from "../General/Footer.jsx";

import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <SimpleHeader />
        <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-4">Bienvenid@</h2>
          <form className="w-100" style={{ maxWidth: "400px" }} action="">
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo:
              </label>
              <input type="text" id="correo" name="correo" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">
                Contraseña:
              </label>
              <input type="password" id="contrasena" name="contrasena" className="form-control" required />
            </div>
            <input type="submit" value="Ingresar" className="btn btn-success bg-custom-primary w-100" />
          </form>
          <div className="mt-3">
            <Link to="/Signup" className="text-decoration-none text-primary">
              <span>¿No tienes una cuenta?</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
