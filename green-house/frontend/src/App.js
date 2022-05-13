import './App.css';
import { CurrentUserContextProvider } from './Contexts/Contexts';
import CalculatorForm from './components/CalculatorForm';
import Calculator from './components/Calculator';
import Navbar from './components/navigation/Navbar/Navbar';
import Footer from './components/navigation/Footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <CurrentUserContextProvider>
      <Navbar/>
        <Main/>
      <Footer />
    </CurrentUserContextProvider>
  )
}

export default App;
