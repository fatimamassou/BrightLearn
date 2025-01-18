import NavBar from "../components/navBar";
import Footer from "../pages/footer";

function Layout({children}) {
    return(
            <div className="bg-bg_secondary w-full">
                <div className="fixed top-0 left-0 w-full z-50">
                    <NavBar />
                </div>
                <div className="pt-36 p-10">
                    {children}
                </div>
                <Footer/>
            </div>
    );
}

export default Layout ;