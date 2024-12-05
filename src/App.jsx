import Category from './components/Category';
import Home from './pages/home';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Home /> 
    </BrowserRouter>
  );
}

export default App;