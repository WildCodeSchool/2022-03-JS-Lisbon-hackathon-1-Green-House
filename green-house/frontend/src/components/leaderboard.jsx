import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../helpers/auth";

function Leaderboard() {
  const [users, setUsers] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5011/leaderboard")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        //   setAuth(true);
      })
      .catch(() => {
        //   setAuth(false);
        //   Cookies.remove("authToken");
      });
  }, []);

  return (
    <div>
      <p>Welcome LeaderBoard</p>
      {users &&
        users.map((user, index) => (
          <div key={index}>
            <p>name: {user.userName}</p>
            <p>score: {user.score}</p>
          </div>
        ))}
    </div>
  );
}

export default Leaderboard;
