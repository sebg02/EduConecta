import { Link } from "react-router-dom";
import SubjectCard from "./Subject Card/SubjectCard";
import Header from "../General/Header.jsx";
import Footer from "../General/Footer.jsx";

function LandingHome() {
  const subjectList = [
    { subject: "Matemáticas", description: "Domina el apasionante mundo de los números" },
    { subject: "Lenguaje", description: "Mejora tus habilidades de comunicación y escritura." },
    { subject: "Ciencias Naturales", description: "Explora el mundo natural y sus fenómenos." },
    { subject: "Historia", description: "Descubre los eventos y procesos del pasado." },
  ];

  return (
    <>
      <div className="landing-container">
        <Header></Header>
        <main className="container my-4">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <img className="img-fluid" src="./src/assets/images/img-landing.jpg" alt="imagen landing page" />
            </div>
            <div className="col-md-6">
              <p>
                <b>EduConecta</b> es una plataforma innovadora que conecta a profesores y estudiantes, proporcionando información detallada sobre
                materias, ubicación, modalidad (presencial u online) y precios. Facilita el acceso a una educación personalizada, permitiendo a los
                usuarios encontrar el profesor ideal y gestionar sus clases de manera eficiente y conveniente.
              </p>
              <br />
              <Link to="/Login">
                <button className="btn btn-success bg-custom-primary">¡Empieza ahora!</button>
              </Link>
            </div>
          </div>
        </main>

        <div className="container">
          <div className="row">
            {subjectList.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.subject}>
                <SubjectCard subject={item.subject} description={item.description} />
              </div>
            ))}
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default LandingHome;
