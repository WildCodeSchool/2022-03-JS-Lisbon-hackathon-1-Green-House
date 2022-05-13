import './App.css';
import './components/fonts/fonts.css'
import { CurrentUserContextProvider } from './Contexts/Contexts';
import CalculatorForm from './components/CalculatorForm';
import Calculator from './components/Calculator';
import Navbar from './components/navigation/Navbar/Navbar';
import Footer from './components/navigation/Footer/Footer';
import Main from './components/main/Main';
import { AuthContextProvider } from "./Contexts/AuthContext";




function App() {
  return (
    <AuthContextProvider>
    <CurrentUserContextProvider>
      <Navbar/>
        <Main/>
      <Footer />
    </CurrentUserContextProvider>
    </AuthContextProvider>

  )
}

export default App;
