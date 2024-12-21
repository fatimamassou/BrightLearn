import Youtube from "../pictures/youtube.jpeg";
import Insta from "../pictures/App icon.jpeg";
import Pinterest from "../pictures/Pinterest.jpeg";
import Tiktok from "../pictures/Purple aesthetic icon TikTok.jpeg";

function Footer() {
    return(
        <div className="footer text-primary-100 font-semibold w-full py-8 flex items-center justify-center">
            <div className="space-y-2">
                <p className="text-center">Inspiring individuals to unlock their true potential and achieve greatness.</p>
                <p className="text-center">Have any questions? Need help? Contact Us anytime!</p>
                <p className="text-center">@ 2024 BrightLearn. All rights reserved.</p>
                <div className="flex items-center justify-center space-x-2 ">
                    <img src={Insta} alt="Instagram" className="w-8 rounded-lg"/>
                    <img src={Tiktok} alt="TikTok" className="w-8 rounded-lg"/>
                    <img src={Youtube} alt="YouTube" className="w-8 rounded-lg"/>
                    <img src={Pinterest} alt="Pinterest" className="w-8 rounded-lg"/>
                </div>
            </div>
        </div>
    );
}

export default Footer ;