import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 2, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-IN')
  );
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) {
      const c = animate(mv, value, { duration, ease: [0.22, 1, 0.36, 1] });
      return c.stop;
    }
  }, [inView, value, duration, mv]);

  useEffect(() => rounded.on('change', (v) => setDisplay(v)), [rounded]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
