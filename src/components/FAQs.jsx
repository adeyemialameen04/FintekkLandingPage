import { useRef, useEffect } from "react";
import { faqs } from "../data";
import Faq from "./Faq";
import FaqImg from '/static/images/faq-img.png';

const FAQs = () => {
  const faqsRef = useRef(null);

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
    observer.observe(faqsRef.current);

    // Clean up the observers when the component is unmounted
    return () => observer.disconnect();
  }, []);


  return (
    <section id="faqs" className="faqs__section">
      <div ref={faqsRef} className="container faqs__container scroll-from-bottom">
        <div className="faqs__container">
          <h1 className="blue-header">FAQs</h1>
          {
            faqs.map(faq => (
              <Faq
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          }
        </div>

      </div>
    </section>
  );
};

export default FAQs;