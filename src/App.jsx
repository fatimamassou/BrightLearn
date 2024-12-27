import SeeAll from './pages/SeeAll';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <SeeAll  /> 
    </BrowserRouter>
  );
}

export default App;