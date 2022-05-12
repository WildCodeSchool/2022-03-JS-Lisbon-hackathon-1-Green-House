import {Routes, Route} from "react-router-dom"
import Home from '../home/Home'

function Main() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
      {/*  <Route path="/leaderboard"/>
      <Route path="/info" element={<Info />} />  */}
    </Routes>
  );
}

export default Main;
