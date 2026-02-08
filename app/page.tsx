"use client";

import { ConfigProvider } from "@/lib/config-context";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/reviews";
import { Promotions } from "@/components/promotions";
import { Location } from "@/components/location";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { DemoSwitcher } from "@/components/demo-switcher";

export default function Home() {
  return (
    <ConfigProvider>
      <main className="min-h-screen">
        <Promotions />
        <Nav />
        {/* DemoSwitcher hidden for client-specific branch */}
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Location />
        <FAQ />
        <Footer />
        <FloatingCTA />
      </main>
    </ConfigProvider>
  );
}
