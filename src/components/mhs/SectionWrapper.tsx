import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
  amount?: number;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  style,
  amount = 0.15,
}: Props) {
  return (
    <motion.section
      id={id}
      style={style}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
