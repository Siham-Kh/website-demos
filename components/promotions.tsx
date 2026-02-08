"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/lib/config-context";

export function Promotions() {
  const { config } = useConfig();
  const [isDismissed, setIsDismissed] = React.useState(false);

  if (!config.promotion.active || isDismissed) {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-1">{config.promotion.title}</h3>
              <p className="text-sm opacity-90">{config.promotion.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="secondary"
                onClick={() => scrollToSection("location")}
                className="whitespace-nowrap"
              >
                {config.promotion.ctaText}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDismissed(true)}
                className="text-primary-foreground hover:bg-white/20"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

