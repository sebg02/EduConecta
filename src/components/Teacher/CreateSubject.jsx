import SimpleHeader from "../General/SimpleHeader";

function CreateSubject() {
  return (
    <>
      <SimpleHeader></SimpleHeader>
      <div className="container my-4">
        <h2>Crear nueva materia</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Materia:
            </label>
            <input type="text" id="subject" name="subject" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="availability" className="form-label">
              Disponibilidad:
            </label>
            <input type="text" id="availability" name="availability" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Precio:
            </label>
            <input type="number" id="price" name="price" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-success bg-custom-primary">
            Crear materia
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateSubject;
