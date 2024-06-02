"use client";

import { Button, ButtonProps } from "antd";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function TextButton(props: ButtonProps) {
  const { children, className, icon, ...restProps } = props;

  return (
    <Button
      {...restProps}
      className={twMerge(
        "hover:border-b-primary font-archivo rounded-none",
        className
      )}
      type="text"
      icon={icon}
    >
      {children}
    </Button>
  );
}

export function PrimaryButton(props: ButtonProps) {
  const { children, className, icon, ...restProps } = props;

  return (
    <Button
      {...restProps}
      className={twMerge("font-archivo bg-primary", className)}
      type="primary"
      icon={icon}
    >
      {children}
    </Button>
  );
}

export function IconButton(props: ButtonProps) {
  const { children, className, icon, ...restProps } = props;

  return (
    <Button
      {...restProps}
      className={twMerge("font-archivo", className)}
      type="text"
      icon={icon}
    />
  );
}
