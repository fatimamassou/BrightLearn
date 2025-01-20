import NavBar from "../components/navBar";

function Layout({children}) {
    return(
            <div className="bg-bg_secondary w-full h-dvh">
                <div className="fixed top-0 left-0 w-full z-50">
                    <NavBar />
                </div>
                <div className="pt-36 p-10">
                    {children}
                </div>                              
            </div>
    );
}

export default Layout ;