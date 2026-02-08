"use client";

import * as React from "react";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { getFullAddress } from "@/lib/siteConfig";
import { useConfig } from "@/lib/config-context";

export function Footer() {
  const { config } = useConfig();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Instagram, url: config.social.instagram, label: "Instagram" },
    { icon: Facebook, url: config.social.facebook, label: "Facebook" },
    { icon: Twitter, url: config.social.twitter, label: "Twitter" },
  ].filter((link) => link.url);

  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">{config.businessName}</h3>
            <p className="text-sm text-muted-foreground mb-4">{config.tagline}</p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{getFullAddress(config)}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href={`tel:${config.phone}`}
                  className="hover:text-foreground transition-colors"
                >
                  {config.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {config.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {Object.entries(config.hours).map(([day, hours]) => (
                <li key={day} className="flex justify-between">
                  <span>{day.substring(0, 3)}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {config.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

