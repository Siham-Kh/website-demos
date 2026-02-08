"use client";

import * as React from "react";
import { Phone, Calendar, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/lib/config-context";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const { config } = useConfig();
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            {config.businessName}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="text-sm"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("gallery")}
              className="text-sm"
            >
              Gallery
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("reviews")}
              className="text-sm"
            >
              Reviews
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("location")}
              className="text-sm"
            >
              Location
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("faq")}
              className="text-sm"
            >
              FAQ
            </Button>
            <ThemeToggle />
            <Button
              onClick={() => window.open(`tel:${config.phone}`, "_self")}
              className="gap-2"
            >
              <Phone className="h-4 w-4" />
              Call
            </Button>
            <Button
              onClick={() => scrollToSection("location")}
              variant="default"
              className="gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("services")}
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("gallery")}
            >
              Gallery
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("reviews")}
            >
              Reviews
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("location")}
            >
              Location
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </Button>
            <div className="pt-2 space-y-2">
              <Button
                onClick={() => window.open(`tel:${config.phone}`, "_self")}
                className="w-full gap-2"
              >
                <Phone className="h-4 w-4" />
                Call
              </Button>
              <Button
                onClick={() => scrollToSection("location")}
                variant="default"
                className="w-full gap-2"
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

