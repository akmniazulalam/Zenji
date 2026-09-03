import { motion, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

const Cursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isVisible, setIsVisible] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, input, textarea, select");

      setIsHovering(!!target);
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("a, button, input, textarea, select");

      if (target && !target.contains(e.relatedTarget)) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
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
        scale: isHovering ? 1.15 : 1,
      }}
      transition={{
        opacity: {
          duration: 0.2,
        },
      }}
      className="fixed top-0 left-0 translate-[-30%] pointer-events-none transition-opacity duration-150 ease-linear z-50"
    />
  );
};

export default Cursor;
