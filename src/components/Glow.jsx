import { useEffect, useRef } from "react";
import "../styles/glow.css";

function Glow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return <div className="glow" ref={glowRef}></div>;
}

export default Glow;