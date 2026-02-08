"use client";

import * as React from "react";
import { siteConfig, type SiteConfig } from "./siteConfig";

const ConfigContext = React.createContext<{
  config: SiteConfig;
  setConfig: (config: SiteConfig) => void;
}>({
  config: siteConfig,
  setConfig: () => {},
});

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = React.useState<SiteConfig>(siteConfig);

  React.useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem("demo-preset");
    if (saved === "nail" || saved === "hair" || saved === "restaurant") {
      // This will be handled by the demo switcher
    }
  }, []);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  return React.useContext(ConfigContext);
}

