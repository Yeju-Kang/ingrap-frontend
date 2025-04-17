import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.scss";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickEffect, setClickEffect] = useState(false);
  const animationFrameRef = useRef(null);
  const latestPositionRef = useRef({ x: 0, y: 0 });
  const timeoutRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      latestPositionRef.current = { x: e.clientX, y: e.clientY };

      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(() => {
          setPosition(latestPositionRef.current);
          animationFrameRef.current = null;
        });
      }
    };

    const handleClick = () => {
      setClickEffect(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setClickEffect(false);
      }, 300);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
      cancelAnimationFrame(animationFrameRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="custom-cursor-wrapper">
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-outline ${clickEffect ? "click-effect" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}

export default CustomCursor;
