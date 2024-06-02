"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { motion as m } from "framer-motion";

type SizeParagraphType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body1"
  | "body2"
  | "caption";

type IProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: SizeParagraphType;
};

function sizeParagraph(size: SizeParagraphType) {
  if (size === "h1") {
    return "resume-h1";
  }
  if (size === "h2") {
    return "resume-h2";
  }
  if (size === "h3") {
    return "resume-h3";
  }
  if (size === "h4") {
    return "resume-h4";
  }
  if (size === "h5") {
    return "resume-h5";
  }
  if (size === "h6") {
    return "resume-h6";
  }
  if (size === "subtitle") {
    return "resume-subtitle";
  }
  if (size === "body1") {
    return "resume-body1";
  }
  if (size === "body2") {
    return "resume-body2";
  }
  if (size === "caption") {
    return "resume-caption";
  }

  return "text-caption";
}

export default function Text(props: IProps) {
  const { children, size, className, ...restProps } = props;

  return (
    <span
      className={twMerge([
        "block",
        sizeParagraph(size || "subtitle"),
        className,
      ])}
      {...restProps}
    >
      {children}
    </span>
  );
}

export function CountingText(props: {
  start: number;
  end: number;
  inView?: boolean;
  className?: string;
  delay?: number;
}) {
  const { start, end, inView = true, className, delay } = props;

  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <m.div
      key={count}
      initial={{ opacity: 0, y: -10 }}
      animate={inView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay || 0.1 }}
      className={twMerge(
        "font-thin text-xl max-sm:text-sm max-[440px]:text-sm max-[440px]:text-center",
        className
      )}
    >
      {String(count).padStart(2, "0")}
    </m.div>
  );
}
