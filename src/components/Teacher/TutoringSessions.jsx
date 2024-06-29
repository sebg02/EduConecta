import { useEffect, useState } from "react";

const TutoringCard = ({ subject, date_time, student, status, onAccept, onReject }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{subject}</h5>
        <p className="card-text">Fecha y hora: {date_time}</p>
        <p className="card-text">Estudiante: {student}</p>
        {status === "confirmed" ? (
          <p className="card-text">Estatus: Confirmado</p>
        ) : (
          <div>
            <button className="btn btn-success me-2" onClick={onAccept}>
              Aceptar
            </button>
            <button className="btn btn-danger" onClick={onReject}>
              Rechazar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const TutoringSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("/tutoring_sessions.json")
      .then((response) => response.json())
      .then((data) => setSessions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAccept = (id) => {
    setSessions(sessions.map((session) => (session.id === id ? { ...session, status: "confirmed" } : session)));
  };

  const handleReject = (id) => {
    setSessions(sessions.filter((session) => session.id !== id));
  };

  return (
    <div className="container d-flex flex-wrap justify-content-center">
      {sessions.map((session) => (
        <TutoringCard
          key={session.id}
          subject={session.subject}
          date_time={session.date_time}
          student={session.student}
          status={session.status}
          onAccept={() => handleAccept(session.id)}
          onReject={() => handleReject(session.id)}
        />
      ))}
    </div>
  );
};

export default TutoringSessions;
