import { motion, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

const Cursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, [x, y]);

  return (
    <motion.img
      src="/cursor-katana-135.png"
      alt=""
      style={{
        x,
        y,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        opacity: {
          duration: 0.2,
        },
      }}
      className="fixed top-0 left-0 -translate-1/2 pointer-events-none z-50"
    />
  );
};

export default Cursor;
