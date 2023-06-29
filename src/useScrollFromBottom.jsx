import { useEffect, useRef } from "react";

const useScrollFromBottom = (threshold = 0.5) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add("scroll-from-bottom");
        } else {
          const element = entry.target;
          element.classList.remove("scroll-from-bottom");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return elementRef;
};

export default useScrollFromBottom;


// import { useEffect, useRef } from "react";

// const useScrollFromBottom = (threshold = 0.5) => {
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const handleIntersection = (entries) => {
//       entries.forEach((entry) => {
//         const element = entry.target;
//         if (entry.isIntersecting) {
//           element.style.bottom = "0";
//         } else {
//           element.style.bottom = "-50px"; // Adjust the value as needed
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       rootMargin: "0px",
//       threshold: threshold,
//     });

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [threshold]);

//   return elementRef;
// };

// export default useScrollFromBottom;
