import { useRef, useState, useEffect } from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  const [value, setValue] = useState(0);
  const leftTestimonialsRef = useRef(null);
  const rigthTestimonialsRef = useRef(null);

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
    if (leftTestimonialsRef.current) {
      observerLeft.observe(leftTestimonialsRef.current);
    }

    if (rigthTestimonialsRef.current) {
      observerRight.observe(rigthTestimonialsRef.current);
    }

    // Clean up the observers when the component is unmounted
    return () => {
      if (leftTestimonialsRef.current) {
        observerLeft.unobserve(leftTestimonialsRef.current);
      }

      if (rigthTestimonialsRef.current) {
        observerRight.unobserve(rigthTestimonialsRef.current);
      }
    };
  }, []);




  const { name, testimonial, img } = testimonials[value];
  return (
    <section className="testimonials__section" id="testimonials">
      <div className="container testimonials__container">
        <div ref={leftTestimonialsRef} className="left__testimonials scroll-from-bottom">
          <h2>Testimonials</h2>
          <h1 className="blue-header">What Our Customers Say About Us</h1>
        </div>
        <div ref={rigthTestimonialsRef} className="right__testimonials scroll-from-bottom">
          <div className="testimonial-img">
            <img src={img} alt={img} />
          </div>
          <div>
            <h4 className="mini-blue-header">{name}</h4>
            <p className="p-gray">{testimonial}</p>
          </div>
          <div className="testimonial-btns">
            {
              testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setValue(index)}
                  className={`circle-btn ${index === value && "active-btn"}`}
                >
                  {testimonial.number}
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;