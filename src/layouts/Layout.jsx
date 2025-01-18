import NavBar from "../components/navBar";
import Footer from "../pages/footer";

function Layout({children}) {
    return(
            <div className="relative bg-bg_secondary w-full h-screen">
                <div className="absolute inset-x-0 top-0 fixed top-0 left-0 w-full z-50">
                    <NavBar />
                </div>
                <div className="pt-36 p-10">
                    {children}
                </div>
                <div className="absolute inset-x-0 bottom-0">
                    <Footer/>
                </div>
            </div>
    );
}

export default Layout ;