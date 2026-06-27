import { useLayoutEffect } from "react";
import gsap from "gsap";

const useReveal = (ref) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, [ref]);
};

export default useReveal;