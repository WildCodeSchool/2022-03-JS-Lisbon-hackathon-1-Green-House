import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Leaderboard from "../Leaderboard/Leaderboard";
import AuthContextProvider, {
  AuthContext,
} from "../../contexts/AuthContext.js";
import Login from "../../Components/Login";
import Signup from "../../Components/Signup";
import Profile from "../../Components/Profile";

function Main() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default Main;
