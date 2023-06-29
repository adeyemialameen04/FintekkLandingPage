import { useEffect, useRef } from "react";

const Signup = () => {
  const signupRef = useRef(null);

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
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(signupRef.current);

    // Clean up the observers when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <section id="signup" className="signup__section">
      <div ref={signupRef} className="container signup__container scroll-from-bottom">
        <h1 className="blue-header">Start growing your wealth today</h1>
        <form action="#">
          <input type="email" placeholder="Enter your email" className="email-input" required />
          <button type="submit" className="short-btn">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Signup;