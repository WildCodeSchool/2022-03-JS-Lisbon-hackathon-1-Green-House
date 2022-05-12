import React from "react";
import './Leaderboard.css'
import avatar1 from '../../media/avatar1.png';
import avatar2 from '../../media/avatar2.png';
import avatar3 from '../../media/avatar3.png';
import avatar4 from '../../media/avatar4.png';
import avatar5 from '../../media/avatar5.png';


export default function Leaderboard() {
    return (
        <div className="leaderboard-container container">
            <div className="leaderboard-title">
                <h1>Leaderboard</h1>
            </div>

            <div className="leaderboard-table-info">
              
                    <p>Avatar</p>
                    <p>Username</p>
                    <p>Email</p>
                    <p>Points</p>
                    <p>Rank</p>
               
            </div>
            <div className="leaderboard-table">
                <div>
                    <img src={avatar1} alt="avatar1" />
                    <p>username</p>
                    <p>email</p>
                    <p>points</p>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="leaderboard-table">
                <div>
                    <img src={avatar2} alt="avatar2" />
                    <p>username</p>
                    <p>email</p>
                    <p>points</p>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="leaderboard-table">
                <div>
                    <img src={avatar3} alt="avatar3" />
                    <p>username</p>
                    <p>email</p>
                    <p>points</p>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="leaderboard-table">
                <div>
                    <img src={avatar4} alt="avatar4" />
                    <p>username</p>
                    <p>email</p>
                    <p>points</p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}