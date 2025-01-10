import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import SeeAll from './pages/SeeAll';
import SingUpStudent from './pages/SingUpStudent';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/seeAll" element={<SeeAll />} />
        <Route path="/register" element={<Register />} />
        <Route path="/singupstudent" element={<SingUpStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
