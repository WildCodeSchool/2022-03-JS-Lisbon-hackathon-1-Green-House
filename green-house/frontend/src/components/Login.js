import React, { useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const [state, setState] = useState({});
  const { setUser, setAuth } = useContext(AuthContext);
  // const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5011/auth/login", state).then((response) => {
      setUser(response.data.foundUser);
      setAuth(true);
      Cookies.set("authToken", response.data.token);
      // history.push("/profile");
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input name="email" value={state.email} onChange={handleChange} />
        <br />
        <p>Password</p>
        <input name="password" value={state.password} onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
