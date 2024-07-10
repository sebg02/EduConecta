import React, { useState } from "react";
import PropTypes from "prop-types";
import UserHeader from "../User/UserHeader.jsx";
import SearchForm from "./SearchForm.jsx";
import ClassList from "../Subjects/ClassList.jsx";

function StudentHome({ studentName }) {
  return (
    <>
      <div>
        <UserHeader />
        <main className="container my-4">
          <h2>
            Hola, <b>{studentName}</b>
          </h2>

          <SearchForm></SearchForm>

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
