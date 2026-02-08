"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFullAddress, getGoogleMapsUrl, getGoogleMapsEmbedUrl } from "@/lib/siteConfig";
import { useConfig } from "@/lib/config-context";

export function Location() {
  const { config } = useConfig();
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re here to serve you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Address & Hours */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{getFullAddress(config)}</p>
                <Button
                  variant="outline"
                  className="mt-4 gap-2"
                  onClick={() => window.open(getGoogleMapsUrl(config), "_blank")}
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(config.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-medium">{day}</span>
                      <span className="text-muted-foreground">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full gap-2 justify-start"
                  onClick={() => window.open(`tel:${config.phone}`, "_self")}
                >
                  <Phone className="h-4 w-4" />
                  {config.phone}
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 justify-start"
                  onClick={() => window.open(`sms:${config.phone}`, "_self")}
                >
                  <MessageSquare className="h-4 w-4" />
                  Text to Book
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 justify-start"
                  onClick={() => window.open(`mailto:${config.email}`, "_self")}
                >
                  <MessageSquare className="h-4 w-4" />
                  {config.email}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px]">
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={getGoogleMapsEmbedUrl(config)}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

