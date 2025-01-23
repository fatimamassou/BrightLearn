import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogIn from './pages/Login';
import Register from './pages/Register';
import SeeAll from './pages/SeeAll';
import SeeMore from './pages/SeeMore';
import SingUpStudent from './pages/SingUpStudent';
import SingUpTeacher from './pages/SingUpTeacher';
import SubscriptionPlans from './pages/Subscripe';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/seeAll" element={<SeeAll />} />
        <Route path="/register" element={<Register />} />
        <Route path="/singupstudent" element={<SingUpStudent />} />
        <Route path="/singupteacher" element={<SingUpTeacher />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/seemore" element={<SeeMore />} /> 
        <Route path="/subscripe" element={<SubscriptionPlans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
