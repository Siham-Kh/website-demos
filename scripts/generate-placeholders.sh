#!/bin/bash

# Generate placeholder images using ImageMagick or download from placeholder service

cd "$(dirname "$0")/../public/images"

# Create placeholder images for nail salon
for i in {1..6}; do
  curl -s "https://picsum.photos/1200/1200?random=$i" -o "nail-$i.jpg" || echo "Failed to download nail-$i.jpg"
done

# Create placeholder images for hair salon
for i in {1..6}; do
  curl -s "https://picsum.photos/1200/1200?random=$((i+10))" -o "hair-$i.jpg" || echo "Failed to download hair-$i.jpg"
done

# Create placeholder images for restaurant
for i in {1..6}; do
  curl -s "https://picsum.photos/1200/1200?random=$((i+20))" -o "restaurant-$i.jpg" || echo "Failed to download restaurant-$i.jpg"
done

echo "Placeholder images generated! Replace with your own business photos."

