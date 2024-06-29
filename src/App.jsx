import { useState } from "react";
import LandingHome from "./components/Landing Page/LandingHome.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import StudentHome from "./components/Student/StudentHome.jsx";
import EditProfile from "./components/User/EditProfile.jsx";
import TeacherHome from "./components/Teacher/TeacherHome.jsx";
import { Route, Routes } from "react-router-dom";
import CreateSubject from "./components/Teacher/CreateSubject.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingHome />}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/StudentHome" element={<StudentHome></StudentHome>}></Route>
        <Route path="/EditProfile" element={<EditProfile></EditProfile>}></Route>
        <Route path="/TeacherHome" element={<TeacherHome></TeacherHome>}></Route>
        <Route path="/CreateSubject" element={<CreateSubject></CreateSubject>}></Route>
      </Routes>
    </>
  );
}

export default App;
