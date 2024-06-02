"use client";

import { motion as m } from "framer-motion";

function TypingText(props: { text: string }) {
  const { text } = props;

  const letters = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <m.div variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <m.span
          className="text-[55px] font-bold leading-10 text-primary max-xl:text-4xl max-[440px]:text-3xl"
          key={index}
          variants={child}
        >
          {letter}
        </m.span>
      ))}
    </m.div>
  );
}

export default TypingText;
