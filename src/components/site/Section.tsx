import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("w-full", className)}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        {children}
      </div>
    </section>
  );
}
