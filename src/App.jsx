

import NavbarMini from './components/navbarmini/navbarmini.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Brand from "./components/brand/brand.jsx";
import Productmenu from "./components/productmenu/productmenu.jsx";
import Store from "./components/store/store.jsx";
import Footer from "./components/footer/footer.jsx";
import Loader from "./components/loader/loader.jsx";



import { useState, useEffect } from "react";

import "./App.css"
const App = () => {

  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate a fetch or async operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after data is fetched
    }, 1000); // Example delay
  }, []);
 
  return (
    <>
      <div className="app-container">

        {loading ? (
          <Loader /> 
        ) : (
          <div></div> 
        )}

        <NavbarMini />
        <Navbar />
        <Brand />
        <Productmenu />
        <Store />
        <Footer />
      </div>
    </>
  );
}

export default App