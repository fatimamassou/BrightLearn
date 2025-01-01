import LandingPage from './pages/LandingPage';
import SeeAll from './pages/SeeAll';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <LandingPage /> 
    </BrowserRouter>
  );
}

export default App;