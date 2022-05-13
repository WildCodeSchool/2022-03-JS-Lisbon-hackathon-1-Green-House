import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Profile() {
  const { user } = useContext(AuthContext);
  // const history = useNavigate();

  return (
    <div>
      <p>Welcome {user.userName}</p>
      <button
        onClick={() => {
          Cookies.remove("authToken");
          // history.push("http://localhost:3000/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
