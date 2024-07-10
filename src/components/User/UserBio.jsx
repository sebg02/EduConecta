import UserHeader from "./UserHeader";
function UserBio() {
  const placeholderImage = "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
  const imageUrl = "#";
  const userImage = imageUrl !== "#" ? imageUrl : placeholderImage;

  return (
    <>
      <UserHeader></UserHeader>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-3 mb-3 mb-md-0">
            <img src={userImage} alt="Imagen del usuario" className="img-fluid rounded" />
          </div>
          <div className="col-md-9">
            <h2>John Doe</h2>
            <p>Ubicación: Ciudad, País</p>
            <p>
              Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione amet officiis veritatis minima vero, necessitatibus ea dolorum
              voluptas aut est voluptates temporibus alias fugit omnis quia! Laborum vero nulla quas!
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h3>Calificaciones y Reseñas</h3>
            {/* Aquí puedes mapear las calificaciones y reseñas */}
            <p>★★★★★ (4.8/5)</p>
            <p>"Excelente tutor, muy paciente y claro en sus explicaciones." - Estudiante A</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h3>Asignaturas y Niveles Enseñados</h3>
            <p>Matemáticas (Secundaria), Física (Universidad), Programación (Básico a Avanzado)</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <button className="btn btn-primary">Reservar una Sesión</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserBio;
