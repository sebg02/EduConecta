import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SubjectCard = ({ subject, availability, price }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{subject}</h5>
        <p className="card-text">Availability: {availability}</p>
        <p className="card-text">Price: ${price}</p>
      </div>
    </div>
  );
};

const TeacherSubjects = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("/teacherSubjects.json")
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container d-flex flex-wrap justify-content-center">
      {subjects.map((subject) => (
        <SubjectCard key={subject.id} subject={subject.subject} availability={subject.availability} price={subject.price} />
      ))}
      <Link to="/CreateSubject" className="card m-3" style={{ width: "18rem", textDecoration: "none" }}>
        <div className="card-body d-flex align-items-center justify-content-center">
          <h5 className="card-title">+</h5>
        </div>
      </Link>
    </div>
  );
};

export default TeacherSubjects;
