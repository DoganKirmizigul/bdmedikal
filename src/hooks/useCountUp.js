import { useState, useEffect } from "react";

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const endNumber = parseInt(end.replace("+", ""));

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * endNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endNumber);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

export default useCountUp;
