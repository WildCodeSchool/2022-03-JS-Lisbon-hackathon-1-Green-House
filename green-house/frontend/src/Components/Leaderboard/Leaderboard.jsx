import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Leaderboard.css";
import avatar1 from "../../media/avatar1.png";
import avatar2 from "../../media/avatar2.png";
import avatar3 from "../../media/avatar3.png";
import avatar4 from "../../media/avatar4.png";
import avatar5 from "../../media/avatar5.png";

export default function Leaderboard() {
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
    <div className="leaderboard-container container">
      <div className="leaderboard-title">
        <h1>Leaderboard</h1>
      </div>
      <div className="leaderboard-table">
        <div>
          <span className="leaderboard-places">1</span>
          <img className="avatar" src={avatar1} alt="avatar1" />
          <div className="user-info">
            <p>{users && users[0].userName}</p>
            <p>
              <span>1293</span> points
            </p>
            <p className="user-info-email">sara.smith@email.com</p>
          </div>
        </div>
      </div>
      <div className="leaderboard-table">
        <div>
          <span className="leaderboard-places">2</span>
          <img className="avatar" src={avatar2} alt="avatar2" />
          <div className="user-info">
            <p>{users && users[1].userName}</p>
            <p>
              <span>1293</span> points
            </p>
            <p className="user-info-email">dave.maguire@email.com</p>
          </div>
        </div>
      </div>
      <div className="leaderboard-table">
        <div>
          <span className="leaderboard-places">3</span>
          <img className="avatar" src={avatar3} alt="avatar3" />
          <div className="user-info">
            <p>{users && users[2].userName}</p>
            <p>
              <span>1293</span> points
            </p>
            <p className="user-info-email">jessica.travis@email.com</p>
          </div>
        </div>
      </div>
      <div className="leaderboard-table">
        <div>
          <span className="leaderboard-places">4</span>
          <img className="avatar" src={avatar4} alt="avatar4" />
          <div className="user-info">
            <p>{users && users[3].userName}</p>
            <p>
              <span>1293</span> points
            </p>
            <p className="user-info-email">amanda.gomez@email.com</p>
          </div>
        </div>
      </div>
      <div className="leaderboard-table">
        <div>
          <span className="leaderboard-places">5</span>
          <img className="avatar" src={avatar5} alt="avatar5" />
          <div className="user-info">
            <p>{users && users[4].userName}</p>
            <p>
              <span>1293</span> points
            </p>
            <p className="user-info-email">john.travolta@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
