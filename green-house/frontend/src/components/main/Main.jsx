import {Routes, Route} from "react-router-dom"
import Home from '../home/Home';
import Leaderboard from "../Leaderboard/Leaderboard";



function Main() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/leaderboard" element={<Leaderboard />}/>
    </Routes>
  );
}

export default Main;
