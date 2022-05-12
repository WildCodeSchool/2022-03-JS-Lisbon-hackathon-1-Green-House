import logo from './logo.svg';
import './App.css';
import { CurrentUserContextProvider } from './Contexts/contexts';
import CalculatorForm from './components/CalculatorForm';
import Calculator from './components/Calculator';

function App() {
  return (
    <CurrentUserContextProvider>
      <CalculatorForm/>
      {/* <div>calculate the amount of  co2 emitted and change your life</div> */}
      <Calculator/>
    </CurrentUserContextProvider>

  );
}

export default App;
