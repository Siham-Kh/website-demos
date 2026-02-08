"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/lib/config-context";

export function Services() {
  const { config } = useConfig();
  const [expandedServices, setExpandedServices] = React.useState<Set<number>>(new Set());

  const toggleService = (index: number) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedServices(newExpanded);
  };

  // Group services by category
  const servicesByCategory = config.services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof config.services>);

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services & Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional services tailored to your needs
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(servicesByCategory).map(([category, services], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                  const globalIndex = config.services.indexOf(service);
                  const isExpanded = expandedServices.has(globalIndex);
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl">{service.name}</CardTitle>
                          <Badge variant="secondary" className="ml-2">
                            {service.priceRange}
                          </Badge>
                        </div>
                        <CardDescription className="mt-2">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      {service.addOns && service.addOns.length > 0 && (
                        <CardContent>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleService(globalIndex)}
                            className="w-full justify-between"
                          >
                            <span className="text-sm">
                              {isExpanded ? "Hide" : "Show"} Add-ons
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </Button>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 space-y-2"
                            >
                              {service.addOns.map((addOn, addOnIndex) => (
                                <div
                                  key={addOnIndex}
                                  className="flex justify-between items-center p-2 bg-muted rounded"
                                >
                                  <span className="text-sm">{addOn.name}</span>
                                  <Badge variant="outline">{addOn.price}</Badge>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

