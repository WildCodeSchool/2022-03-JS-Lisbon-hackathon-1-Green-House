import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [state, setState] = useState({});
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/auth/signup", state).then((response) => {
      alert("user has been signed up successfully");
      history.push("/login");
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <p>Signup</p>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input name="email" value={state.email} onChange={handleChange} />
        <br />
        <p>User Name</p>
        <input name="fullName" value={state.userName} onChange={handleChange} />
        <br />
        <p>Password</p>
        <input name="password" value={state.password} onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Signup;
