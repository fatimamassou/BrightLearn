import{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from './buttons';
import NavBarLinks from './NavBarLinks';

export default function NavBar({ route }){
  const [bgColor, setBgColor] = useState('bg-secondary');
  const [logoWidth, setLogoWidth] = useState('w-[250px]');
  const styleBefore = `px-10 ${bgColor}`;
  const styleAfter = `px-20 ${bgColor}`;
  const [style, setStyle] = useState(styleBefore);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentBg = 'bg-secondary';
      let style =  styleAfter;
      let currentWidth = 'w-[200px]'; 
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 600) {
          if (section.id === 'home') {
            currentBg = 'bg-transparent';
            style = styleBefore;
            currentWidth = 'w-[250px]';
          }
        }
      });

      setBgColor(currentBg);
      setStyle(style);
      setLogoWidth(currentWidth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return(
    <div 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between py-2 ${style}`}
    > 
      <Link
        to="/"
      >
        <img
          src={logo} 
          alt="Logo" 
          className={`${logoWidth} cursor-pointer`}
        />
      </Link>
      {route === 'home' ? <div className="flex space-x-14">
        <NavBarLinks text="Home" to="home"/>
        <NavBarLinks text="Tutors" to="tutors"/>
        <NavBarLinks text="About" to="about" />
        <NavBarLinks text="Contact" to="contact"/>
      </div> : null
      }
 
      <div className="flex space-x-2">
        <Button text="Log In" type="secondary" to="/login" />
        <Button text="Sign Up" type="primary" to="/register" />
      </div>
    </div> 
  );
};
