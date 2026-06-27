import { useRef } from "react";

function MagneticButton({ children, className, href }) {
  const ref = useRef();

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform =
      `translate(${x * .2}px,${y * .2}px)`;
  };

  const leave = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      href={href}
      ref={ref}
      className={className}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {children}
    </a>
  );
}

export default MagneticButton;