"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sparkles } from "lucide-react";
import { nailSalonConfig, hairSalonConfig, restaurantConfig } from "@/lib/siteConfig";
import { useConfig } from "@/lib/config-context";

// Only show in demo mode (when running locally or with demo flag)
const isDemoMode =
  (typeof window !== "undefined" && window.location.search.includes("demo=true")) ||
  process.env.NODE_ENV === "development";

export function DemoSwitcher() {
  const { config, setConfig } = useConfig();
  const [currentPreset, setCurrentPreset] = React.useState<string>("nail");

  React.useEffect(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("demo-preset");
    if (saved) {
      setCurrentPreset(saved);
      const configs: Record<string, typeof nailSalonConfig> = {
        nail: nailSalonConfig,
        hair: hairSalonConfig,
        restaurant: restaurantConfig,
      };
      if (configs[saved]) {
        setConfig(configs[saved]);
      }
    }
  }, [setConfig]);

  if (!isDemoMode) {
    return null;
  }

  const handlePresetChange = (preset: string) => {
    setCurrentPreset(preset);
    localStorage.setItem("demo-preset", preset);
    const configs: Record<string, typeof nailSalonConfig> = {
      nail: nailSalonConfig,
      hair: hairSalonConfig,
      restaurant: restaurantConfig,
    };
    if (configs[preset]) {
      setConfig(configs[preset]);
    }
  };

  const presetName =
    currentPreset === "nail"
      ? "Nail Salon"
      : currentPreset === "hair"
      ? "Hair Salon"
      : "Restaurant";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed top-24 right-4 z-50 shadow-lg bg-background"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Demo: {presetName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handlePresetChange("nail")}>
          Nail Salon
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handlePresetChange("hair")}>
          Hair Salon
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handlePresetChange("restaurant")}>
          Restaurant
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

