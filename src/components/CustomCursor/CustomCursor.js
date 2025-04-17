import React, { useEffect, useState } from "react";
import "./CustomCursor.scss";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickEffect, setClickEffect] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      // 좌표가 바뀌었을 때만 setState
      setPosition((prev) => {
        if (prev.x !== clientX || prev.y !== clientY) {
          return { x: clientX, y: clientY };
        }
        return prev;
      });
    };

    const handleClick = () => {
      setClickEffect(true);
      setTimeout(() => setClickEffect(false), 300);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
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
