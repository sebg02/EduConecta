import SimpleHeader from "../General/SimpleHeader";
import Footer from "../General/Footer";

function Signup() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <SimpleHeader />
        <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center p-3">
          <h2 className="mb-4">¡Regístrate!</h2>
          <form className="w-100 " style={{ maxWidth: "400px" }} action="">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo:
              </label>
              <input type="text" id="nombre" name="nombre" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico:
              </label>
              <input type="email" id="correo" name="correo" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">
                Contraseña:
              </label>
              <input type="password" id="contrasena" name="contrasena" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="rol" className="form-label">
                Rol:
              </label>
              <select id="rol" name="rol" className="form-select" required>
                <option value="estudiante">Estudiante</option>
                <option value="profesor">Profesor</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="nivelEducativo" className="form-label">
                Nivel Educativo:
              </label>
              <select id="nivelEducativo" name="nivelEducativo" className="form-select" required>
                <option value="bachillerato">Bachillerato</option>
                <option value="tenico">Técnico</option>
                <option value="profesional">Profesional</option>
                <option value="posgrado">Posgrado</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="ubicacion" className="form-label">
                Ubicación:
              </label>
              <input type="text" id="ubicacion" name="ubicacion" className="form-control" required />
            </div>
            <input type="submit" value="Registrarse" className="btn btn-success bg-custom-primary w-100" />
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
