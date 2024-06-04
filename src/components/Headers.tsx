"use client";

import React, { ReactNode } from "react";
import Text from "./Text";
import { twMerge } from "tailwind-merge";
import { motion as m } from "framer-motion";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

export default function SectionHeader(
  props: HeaderProps & { inView?: boolean }
) {
  const { children, className, inView = true } = props;

  return (
    <m.div
      className="flex items-center gap-x-3"
      animate={inView && { opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
      <m.div
        className="w-3 h-16 bg-primary"
        style={{
          scale: inView ? 1 : 0,
          opacity: inView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      />
      <m.div
        style={{
          transform: inView ? "none" : "translateX(-50px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.5s",
        }}
      >
        <Text className={twMerge("text-newBlack", className)}>{children}</Text>
      </m.div>
    </m.div>
  );
}

export function InnerHeader(
  props: HeaderProps & { center?: boolean; inView?: boolean; delay?: number }
) {
  const { children, className, center = false, inView = true, delay } = props;

  return (
    <div
      className={twMerge(
        "opacity-1 flex items-center gap-4",
        center ? "justify-center" : ""
      )}
    >
      <m.hr
        initial={{ x: -50, opacity: 0 }}
        animate={inView && { x: 0, opacity: 1 }}
        transition={{ delay: delay || 2.4 }}
        className="w-20 border-primary max-sm:w-10"
      />
      <m.div
        initial={{ scale: 0 }}
        animate={inView && { scale: 1 }}
        transition={{ delay: delay! + 0.2 || 2.5 }}
      >
        <Text className={twMerge("text-newBlack", className)}>{children}</Text>
      </m.div>
      <m.hr
        initial={{ x: 50, opacity: 0 }}
        animate={inView && { x: 0, opacity: 1 }}
        transition={{ delay: delay || 2.4 }}
        className="w-20 border-primary max-sm:w-10"
      />
    </div>
  );
}
