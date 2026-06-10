import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

/**
 * Sticky bottom CTA bar — mobile/tablet only (hidden at lg+).
 * Both buttons navigate to the Contact page.
 */
export function MobileCtaBar() {
  const { scrollDir, isAtTop } = useScrollDirection();
  const visible = scrollDir === "up" || isAtTop;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div
            className="bg-[color:var(--primary)] px-4 pt-3 shadow-[0_-12px_48px_rgba(0,74,39,0.4)]"
            style={{ paddingBottom: "max(14px, env(safe-area-inset-bottom))" }}
          >
            <div className="flex gap-2.5">
              <Link
                to="/contact"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 py-3.5 text-[13px] font-semibold tracking-[0.04em] text-white transition-colors active:bg-white/10"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call Now
              </Link>
              <Link
                to="/contact"
                className="flex flex-1 items-center justify-center rounded-full bg-white py-3.5 text-[13px] font-bold tracking-[0.04em] text-[color:var(--primary)] transition-colors active:bg-white/90"
              >
                Request Quote →
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
