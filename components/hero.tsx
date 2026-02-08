"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getGoogleMapsUrl } from "@/lib/siteConfig";
import { useConfig } from "@/lib/config-context";

export function Hero() {
  const { config } = useConfig();
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Demo Ribbon */}
      <div className="absolute top-8 left-0 right-0 z-10 flex justify-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Free Demo Preview</span>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {config.businessName}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {config.tagline}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {config.badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {badge}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => window.open(`tel:${config.phone}`, "_self")}
              className="gap-2 text-lg px-8"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const location = document.getElementById("location");
                location?.scrollIntoView({ behavior: "smooth" });
              }}
              className="gap-2 text-lg px-8"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(getGoogleMapsUrl(config), "_blank")}
              className="gap-2 text-lg px-8"
            >
              <MapPin className="h-5 w-5" />
              Get Directions
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

