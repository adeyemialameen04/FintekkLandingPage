import PhoneImg from '/static/images/phone.png';
import { steps } from "../data";
import Step from "./Step";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const Steps = () => {
  const imgRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    // Intersection Observer callback function
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add('scroll-visible');
        } else {
          const element = entry.target;
          element.classList.remove('scroll-visible');

        }
      });
    };

    // Options for the Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    // Create the Intersection Observer instances
    const observerLeft = new IntersectionObserver(handleIntersection, options);
    const observerRight = new IntersectionObserver(handleIntersection, options);

    // Start observing the elements
    if (imgRef.current) {
      observerLeft.observe(imgRef.current);
    }

    if (stepsRef.current) {
      observerRight.observe(stepsRef.current);
    }

    // Clean up the observers when the component is unmounted
    return () => {
      if (imgRef.current) {
        observerLeft.unobserve(imgRef.current);
      }

      if (stepsRef.current) {
        observerRight.unobserve(stepsRef.current);
      }
    };
  }, []);


  return (
    <section className="steps__section">
      <div className="container steps__container">
        <div ref={imgRef} className="img__container scroll-from-bottom">
          <img src={PhoneImg} />
        </div>
        <div ref={stepsRef} className="steps scroll-from-bottom">
          <h1 className="blue-header">Start the journey to reach your financial goals today</h1>
          {
            steps.map(step => (
              <Step
                key={step.id}
                step1={step.step1}
                step2={step.step2}
                number={step.number}
              />
            ))
          }
          <Link to="/" className="long-btn blue-btn">Download</Link>
        </div>
      </div>
    </section>
  );
};

export default Steps;