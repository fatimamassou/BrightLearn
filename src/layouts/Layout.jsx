import NavBar from '../components/navBar';

function Layout({ children }) {
  return(
    <div className="bg-bg_secondary w-full h-screen flex justify-center items-center">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <div className="pt-36 p-10 min-h-screen">
        {children}
      </div>                              
    </div>
  );
}

export default Layout ;
