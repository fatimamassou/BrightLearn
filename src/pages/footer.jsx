import Youtube from '../assets/youtube.jpeg';
import Insta from '../assets/App icon.jpeg';
import Pinterest from '../assets/Pinterest.jpeg';
import Tiktok from '../assets/Purple aesthetic icon TikTok.jpeg';

function Footer() {
  const socailIconStyle = 'rounded-lg hover:shadow-300 transition-all duration-500';
  return(
    <div className="footer text-primary-100 font-semibold w-full py-8 flex items-center justify-center">
      <div className="space-y-2">
        <p className="text-center">Inspiring individuals to unlock their true potential and achieve greatness.</p>
        <p className="text-center">Have any questions? Need help? Contact Us anytime!</p>
        <p className="text-center">@ 2024 BrightLearn. All rights reserved.</p>
        <div className="flex items-center justify-center space-x-2 ">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={socailIconStyle}>
            <img src={Insta} alt="Instagram" className="w-8 rounded-lg" />
          </a>
          <a href="https://www.tiktok.com" target="_blank"  rel="noopener noreferrer" className={socailIconStyle}>
            <img src={Tiktok} alt="TikTok" className="w-8 rounded-lg" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={socailIconStyle}>
            <img src={Youtube} alt="YouTube" className="w-8 rounded-lg" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className={socailIconStyle}>
            <img src={Pinterest} alt="Pinterest" className="w-8 rounded-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer ;
