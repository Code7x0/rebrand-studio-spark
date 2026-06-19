import type { ReactNode } from "react";
import { motion } from "framer-motion";
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
    <motion.section
      id={id}
      className={cn("w-full py-14 lg:py-28", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {children}
      </div>
    </motion.section>
  );
}
