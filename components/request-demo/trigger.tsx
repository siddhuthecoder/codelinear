"use client";

import { cn } from "@/lib/utils";
import { useRequestDemo } from "./context";

type RequestDemoTriggerProps = {
  className?: string;
  children?: React.ReactNode;
};

export function RequestDemoTrigger({ className, children }: RequestDemoTriggerProps) {
  const { open } = useRequestDemo();
  return (
    <button type="button" onClick={open} className={cn(className)}>
      {children ?? "Request Demo"}
    </button>
  );
}
