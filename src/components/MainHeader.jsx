import PlayStoreImg from '/static/images/playstore.png';
import AppleImg from '/static/images/apple.png';
import PersonImg from '/static/images/img-1.png';
import "../home.css";
import { FaPiggyBank, FaTelegram, FaChartBar } from 'react-icons/fa';
import { HashLink } from "react-router-hash-link";
import { useEffect, useRef } from "react";
import useScrollFromBottom from "../useScrollFromBottom";

const MainHeader = () => {
  const mainHeaderLeftRef = useRef();
  const mainHeaderRightRef = useRef();

  useEffect(() => {
    // Intersection Observer callback function
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in viewport
          console.log(`${entry.target.id} is in viewport`);
          // Perform desired actions
          const element = entry.target;
          element.classList.add('scroll-visible');
        } else {
          // Element is out of viewport
          console.log(`${entry.target.id} is out of viewport`);
          // Perform desired actions
          // mainHeaderLeftRef.current.style.left = "-180px";
          const element = entry.target;
          element.classList.remove('scroll-visible');

        }
      });
    };

    // Options for the Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0, // Trigger when 50% of the element is scroll-visible
    };

    // Create the Intersection Observer instances
    const observerLeft = new IntersectionObserver(handleIntersection, options);
    const observerRight = new IntersectionObserver(handleIntersection, options);

    // Start observing the elements
    if (mainHeaderLeftRef.current) {
      observerLeft.observe(mainHeaderLeftRef.current);
    }

    if (mainHeaderRightRef.current) {
      observerRight.observe(mainHeaderRightRef.current);
    }

    // Clean up the observers when the component is unmounted
    return () => {
      if (mainHeaderLeftRef.current) {
        observerLeft.unobserve(mainHeaderLeftRef.current);
      }

      if (mainHeaderRightRef.current) {
        observerRight.unobserve(mainHeaderRightRef.current);
      }
    };
  }, []);




  return (
    <header className="main__header">
      <div className="main__header-container container">
        <div ref={mainHeaderLeftRef} className="main__header-left scroll-from-bottom">
          <h1>Pay, Invest, Save Your Cash with a single Bank</h1>
          <p>Fintekk is the bank that does it all. Manage everything directly and easy with fintekk.</p>
          <div className="main__header-btns">
            <HashLink to="#signup" className="long-btn blue-btn">Sign Up </HashLink>
            <a href="#">
              <img src={PlayStoreImg} alt="Playstore Logo" />
              <p>Get on Android</p>
            </a>
            <a href="#">
              <img src={AppleImg} alt="Apple Logo" />
              <p>Get on Iphone</p>
            </a>
          </div>
        </div>
        <div ref={mainHeaderRightRef} className="main__header-right scroll-from-bottom">
          <img src={PersonImg} alt="A person image" />
          <article className="savings">
            <FaPiggyBank className="icon" />
            <div>
              <p>Savings</p>
              <div className="floating-card-bar">
                <div className="floating-card-inner-bar"></div>
              </div>
            </div>
          </article>
          <article className="investments">
            <FaChartBar className="icon" />
            <div>
              <p>Investments</p>
              <div className="floating-card-bar">
                <div className="floating-card-inner-bar"></div>
              </div>
            </div>
          </article>
          <article className="payments">
            <FaTelegram className="icon" />
            <div>
              <p>Payments</p>
              <div className="floating-card-bar">
                <div className="floating-card-inner-bar"></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;