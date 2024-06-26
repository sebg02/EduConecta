import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard.jsx";

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("/subjects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setClasses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container d-flex flex-wrap justify-content-center">
      {classes.map((classData) => (
        <ClassCard
          key={classData.id}
          subject={classData.subject}
          teacher={classData.teacher}
          availability={classData.availability}
          price={classData.price}
        />
      ))}
    </div>
  );
};

export default ClassList;
