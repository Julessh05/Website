import type { ElementType, ReactNode } from "react";

type StackProps = {
  as?: ElementType;
  className?: string;
  delay?: "delay1" | "delay2" | "delay3";
  children: ReactNode;
};

export default function Stack({ as = "div", className, delay, children }: StackProps) {
  const Tag = as;
  const classes = ["stack", "fadeIn", delay, className].filter(Boolean).join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
