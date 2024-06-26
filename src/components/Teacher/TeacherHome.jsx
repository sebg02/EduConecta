import { Link } from "react-router-dom";

function TeacherHome() {
  return (
    <>
      <div className="teacherhome">
        <header>
          <h1 className="">EduConecta</h1>
          <Link to="/EditProfile">
            <button>Editar perfil</button>
          </Link>
        </header>

        <main>
          <h2>
            Hola, <b>Teacher</b>
          </h2>
          <input type="text" placeholder="Buscar clases" />
        </main>
      </div>
    </>
  );
}

export default TeacherHome;
