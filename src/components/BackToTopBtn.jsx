import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from 'react-icons/ai';

const BackToTopBtn = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollBtn && <button onClick={scrollToTop} className="toTopBtn">
        <AiOutlineArrowUp className="toTopIcon" />
      </button>}
    </>
  );
};

export default BackToTopBtn;