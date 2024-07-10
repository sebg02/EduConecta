import SimpleHeader from "../General/SimpleHeader";
function EditProfile() {
  return (
    <>
      <SimpleHeader></SimpleHeader>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="edit-container bg-light p-4 rounded shadow">
          <h2 className="mb-4">Editar perfil</h2>
          <form action="">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo:
              </label>
              <input type="text" id="nombre" name="nombre" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="nivelEducativo" className="form-label">
                Nivel Educativo
              </label>
              <select id="nivelEducativo" name="nivelEducativo" className="form-select" required>
                <option value="bachillerato">Bachillerato</option>
                <option value="tecnico">Técnico</option>
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
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Bio:
              </label>
              <textarea type="text" id="bio" name="bio" className="form-control" required />
            </div>
            <div className="text-center">
              <input type="submit" value="Guardar" className="btn btn-success bg-custom-color" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
