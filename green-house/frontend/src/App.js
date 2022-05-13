import "./App.css";
import "./components/fonts/fonts.css";
import Navbar from "./components/navigation/Navbar/Navbar";
import Footer from "./components/navigation/Footer/Footer";
import Main from "./components/main/Main";

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
