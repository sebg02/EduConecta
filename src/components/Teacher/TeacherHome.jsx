import { Link } from "react-router-dom";
import UserHeader from "../User/UserHeader.jsx";
import TeacherSubjects from "./TeacherSubjects.jsx";
import TutoringSessions from "./TutoringSessions.jsx";

function TeacherHome() {
  return (
    <>
      <div>
        <UserHeader />
        <main className="container my-4">
          <h2>
            Hola, <b>Teacher</b>
          </h2>
          <h3>Mis materias</h3>
          <TeacherSubjects></TeacherSubjects>
          <hr />
          <h4>Tutorias</h4>
          <TutoringSessions></TutoringSessions>
        </main>
      </div>
    </>
  );
}

export default TeacherHome;
