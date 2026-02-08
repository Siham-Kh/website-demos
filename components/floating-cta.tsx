"use client";

import * as React from "react";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/lib/config-context";

export function FloatingCTA() {
  const { config } = useConfig();
  const scrollToLocation = () => {
    const element = document.getElementById("location");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex gap-2 max-w-md mx-auto">
        <Button
          onClick={() => window.open(`tel:${config.phone}`, "_self")}
          className="flex-1 gap-2 shadow-lg"
          size="lg"
        >
          <Phone className="h-4 w-4" />
          Call
        </Button>
        <Button
          onClick={scrollToLocation}
          variant="default"
          className="flex-1 gap-2 shadow-lg"
          size="lg"
        >
          <Calendar className="h-4 w-4" />
          Book
        </Button>
      </div>
    </div>
  );
}

