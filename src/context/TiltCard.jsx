import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltCard({ children, className = "" }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05
    });
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}