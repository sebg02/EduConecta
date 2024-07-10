import { useState } from "react";

function SearchForm() {
  const [searchCriteria, setSearchCriteria] = useState({
    subject: "",
    availability: {
      day: "",
      startTime: "",
      endTime: "",
    },
    educationLevel: "",
    area: "",
  });

  const handleInputChange = (field, value) => {
    setSearchCriteria((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAvailabilityChange = (field, value) => {
    setSearchCriteria((prevState) => ({
      ...prevState,
      availability: {
        ...prevState.availability,
        [field]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar la búsqueda
    console.log("Criterios de búsqueda:", searchCriteria);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container my-4">
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="subject" className="form-label">
              Materia
            </label>
            <input
              type="text"
              id="subject"
              className="form-control"
              value={searchCriteria.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="availabilityDay" className="form-label">
              Día
            </label>
            <select
              id="availabilityDay"
              className="form-select"
              value={searchCriteria.availability.day}
              onChange={(e) => handleAvailabilityChange("day", e.target.value)}
            >
              <option value="">Selecciona un día</option>
              <option value="Monday">Lunes</option>
              <option value="Tuesday">Martes</option>
              <option value="Wednesday">Miércoles</option>
              <option value="Thursday">Jueves</option>
              <option value="Friday">Viernes</option>
              <option value="Saturday">Sábado</option>
              <option value="Sunday">Domingo</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="availabilityStartTime" className="form-label">
              Hora de Inicio
            </label>
            <input
              type="time"
              id="availabilityStartTime"
              className="form-control"
              value={searchCriteria.availability.startTime}
              onChange={(e) => handleAvailabilityChange("startTime", e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="availabilityEndTime" className="form-label">
              Hora de Fin
            </label>
            <input
              type="time"
              id="availabilityEndTime"
              className="form-control"
              value={searchCriteria.availability.endTime}
              onChange={(e) => handleAvailabilityChange("endTime", e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label htmlFor="educationLevel" className="form-label">
              Nivel Educativo
            </label>
            <select
              id="educationLevel"
              className="form-select"
              value={searchCriteria.educationLevel}
              onChange={(e) => handleInputChange("educationLevel", e.target.value)}
            >
              <option value="">Selecciona un nivel</option>
              <option value="Bachillerato">Bachillerato</option>
              <option value="Tecnico">Técnico</option>
              <option value="Profesional">Profesional</option>
              <option value="Posgrado">Posgrado</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="area" className="form-label">
              Área geográfica
            </label>
            <input
              type="text"
              id="area"
              className="form-control"
              value={searchCriteria.area}
              onChange={(e) => handleInputChange("area", e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
