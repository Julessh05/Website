import type { ElementType, ReactNode } from "react";

type PageSectionProps = {
  as?: ElementType;
  className?: string;
  delay?: "delay1" | "delay2" | "delay3";
  children: ReactNode;
};

export default function PageSection({
  as = "section",
  className,
  delay,
  children,
}: PageSectionProps) {
  const Tag = as;
  const classes = ["pageSection", "stack", "fadeIn", delay, className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
