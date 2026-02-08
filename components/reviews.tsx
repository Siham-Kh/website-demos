"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useConfig } from "@/lib/config-context";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const { config } = useConfig();
  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from satisfied customers
          </p>
        </motion.div>

        {/* Overall Rating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-12"
        >
          <Card className="text-center p-6">
            <div className="text-5xl font-bold mb-2">{config.overallRating}</div>
            <StarRating rating={Math.round(config.overallRating)} />
            <p className="text-sm text-muted-foreground mt-2">
              Based on {config.reviews.length} reviews
            </p>
          </Card>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {config.reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

