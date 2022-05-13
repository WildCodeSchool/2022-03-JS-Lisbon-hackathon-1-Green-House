import React from "react";
import "./App.css";
import "./Components/fonts/fonts.css";
import Navbar from "./Components/navigation/Navbar/Navbar.jsx";
import Footer from "./Components/navigation/Footer/Footer.jsx";
import Main from "./Components/main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
