import Home from '../home/Home'
import Info from '../Info/Info'
import { Routes, Route } from "react-router-dom";
import Leaderboard from "../Leaderboard/Leaderboard";
import Login from "../Login";
import Signup from "../Signup";
import Profile from "../Profile";


function Main() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
  );
}

export default Main;
