import {Routes, Route} from "react-router-dom"
import Home from '../home/Home'
import Info from '../Info/Info'


function Main() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}

export default Main;
