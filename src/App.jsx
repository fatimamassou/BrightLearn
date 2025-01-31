import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingUpStudent from './pages/SingUpStudent';
import SingUpTeacher from './pages/SingUpTeacher';
import SubscriptionPlans from './pages/Subscribe';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import SeeMore from './pages/SeeMore';
import SeeAll from './pages/SeeAll';
import LogIn from './pages/Login';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/seeAll" element={<SeeAll />} />
        <Route path="/seemore" element={<SeeMore />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/singupstudent" element={<SingUpStudent />} />
        <Route path="/singupteacher" element={<SingUpTeacher />} />
        <Route path="/subscripe" element={<SubscriptionPlans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
