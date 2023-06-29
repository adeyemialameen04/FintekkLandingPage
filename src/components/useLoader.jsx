import { useEffect, useState } from "react";

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleDomContentLoaded = () => {
      setIsLoading(true);
    };

    document.addEventListener("load", handleDomContentLoaded);

    return () => {
      document.removeEventListener("load", handleDomContentLoaded);
    };
  }, []);

  return isLoading;
};

export default useLoader;