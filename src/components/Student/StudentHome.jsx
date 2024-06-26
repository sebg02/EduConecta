import React, { useState } from "react";
import PropTypes from "prop-types";
import UserHeader from "../User/UserHeader.jsx";
import ClassList from "../Subjects/ClassList.jsx";

function StudentHome({ studentName }) {
  const [filter, setFilter] = useState({
    subject: "",
    availability: "",
    educationLevel: "",
    location: "",
  });

  const handleFilterChange = (type, value) => {
    setFilter({ ...filter, [type]: value });
  };

  return (
    <>
      <div>
        <UserHeader />
        <main className="container my-4">
          <h2>
            Hola, <b>{studentName}</b>
          </h2>
          <input type="text" className="form-control my-3" placeholder="Buscar clases" />

          <div className="btn-group my-3">
            <button className="btn btn-success bg-custom-primary" onClick={() => handleFilterChange("subject", "subjectValue")}>
              Filtrar por materia
            </button>
            <button className="btn btn-success bg-custom-primary" onClick={() => handleFilterChange("availability", "availabilityValue")}>
              Filtrar por disponibilidad
            </button>
            <button className="btn btn-success bg-custom-primary" onClick={() => handleFilterChange("educationLevel", "educationLevelValue")}>
              Filtrar por nivel educativo
            </button>
            <button className="btn btn-success bg-custom-primary" onClick={() => handleFilterChange("location", "locationValue")}>
              Filtrar por área geográfica
            </button>
          </div>
          <ClassList></ClassList>
        </main>
      </div>
    </>
  );
}

StudentHome.propTypes = {
  studentName: PropTypes.string,
};

StudentHome.defaultProps = {
  studentName: "Estudiante",
};

export default StudentHome;
