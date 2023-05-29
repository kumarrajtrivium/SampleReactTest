import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();
  const goEmployee = () => {
    navigate("/emp/");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };
  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <p>Welcome to your {localStorage.getItem("uname")}</p>
        <button onClick={goEmployee}>Employee Records</button>
        <button onClick={doLogout}>Logout</button>
      </div>
    );
  }
};

export default DashBoard;
