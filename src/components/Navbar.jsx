import './navbar.css';
import { links } from "../data";
import { useEffect, useState } from "react";
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (isNavShowing) {
        document.body.style.overflowY = "hidden";
        // document.body.classList.add("no-scroll");
      } else {
        document.body.style.overflowY = "scroll";
        // document.body.classList.remove("no-scroll");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.overflowY = "initial";
      window.removeEventListener("scroll", handleScroll);
      // document.body.classList.remove("no-scroll");
    };
  }, [isNavShowing]);

  return (
    <header className="nav__header">
      <div className="container header__container">
        <h1>Fintekk</h1>
        <nav className={`nav ${isNavShowing ? "show__nav" : ''}`}>
          <ul className="nav__links">
            {
              links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavHashLink
                      to={path}
                      onClick={() => setIsNavShowing(prev => !prev)}>
                      {name}
                    </NavHashLink>
                  </li>
                );
              })
            }
          </ul>
          <div className="btns">
            <button className="short-btn login-btn">Login</button>
            <NavHashLink to="#signup" className="long-btn blue-btn">Sign Up</NavHashLink>
          </div>
        </nav>
        <div
          className="nav__btns"
          onClick={() => setIsNavShowing(prev => !prev)}
        >
          <button>
            {
              isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
            }
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;