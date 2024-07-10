import SimpleHeader from "../General/SimpleHeader";
import { useState } from "react";

function CreateSubject() {
  const [availability, setAvailability] = useState({
    Lunes: { startTime: "", endTime: "" },
    Martes: { startTime: "", endTime: "" },
    Miercoles: { startTime: "", endTime: "" },
    Jueves: { startTime: "", endTime: "" },
    Viernes: { startTime: "", endTime: "" },
    Sabado: { startTime: "", endTime: "" },
    Domingo: { startTime: "", endTime: "" },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(availability),
      });
      const data = await response.json();
      console.log("Disponibilidad guardada:", data);
    } catch (error) {
      console.error("Error al guardar la disponibilidad:", error);
    }
  };

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
            <form onSubmit={handleSubmit}>
              {Object.keys(availability).map((day) => (
                <div key={day}>
                  <p>{day}</p>
                  <label>
                    Hora de Inicio:
                    <input type="time" value={availability[day].startTime} onChange={(e) => handleInputChange(day, "startTime", e.target.value)} />
                  </label>
                  <label>
                    Hora de Fin:
                    <input type="time" value={availability[day].endTime} onChange={(e) => handleInputChange(day, "endTime", e.target.value)} />
                  </label>
                </div>
              ))}
            </form>
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
