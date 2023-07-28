import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import Loading from "./components/Loading";
import useLoader from "./components/useLoader";

function App() {
  // const [isDomLoaded, setIsDomLoaded] = useState(false);
  // const isLoading = useLoader();
  const [isLoading, setIsLoading] = useState(true);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      document.body.classList.add("resize-animation-stopper");
      setIsResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
        setIsResizing(false);
      }, 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
      <BackToTopBtn />
      <Footer />
    </Router>
  );
}

export default App;
