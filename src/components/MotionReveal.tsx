import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MotionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function MotionReveal({ children, delay = 0, className = '' }: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
