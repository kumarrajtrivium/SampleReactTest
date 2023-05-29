import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import FavColor from "./FavColor";
import Afterlogin from "../Afterlogin";
import DashBoard from "./DashBoard";
import Alert1 from "./Alert1";
const Login = () => {
  const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("username or password can't blank");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert1>Login not successful try again...</Alert1>,
        document.getElementById("root")
      );
    }
  };
  const handleReset = () => {
    setUname("");
    setPwd("");
  };
  return (
    <div>
      UserName :{" "}
      <input
        type="text"
        id="t1"
        value={uname}
        onChange={(e) => setUname(e.target.value)}
      />
      <br></br>
      Passsword :{" "}
      <input
        type="password"
        id="t2"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <br></br>
      <button type="button" onClick={doLogin}>
        Login
      </button>
      <br></br>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Login;
