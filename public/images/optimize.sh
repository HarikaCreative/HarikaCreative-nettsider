#!/bin/bash

# HERO IMAGES (1920x1080, landscape oriented)
echo "Creating HERO images..."
convert original/maybe.webp -resize "1920x1080^" -gravity center -extent 1920x1080 -quality 85 hero/maybe-hero.webp
convert original/catch-the-light.webp -resize "1920x1080^" -gravity center -extent 1920x1080 -quality 85 hero/catch-the-light-hero.webp
convert original/always-different-secretplace.webp -resize "1920x1080^" -gravity center -extent 1920x1080 -quality 85 hero/always-different-secretplace-hero.webp
convert original/summer-evenings-secretplace.webp -resize "1920x1080^" -gravity center -extent 1920x1080 -quality 85 hero/summer-evenings-hero.webp
convert original/where_s-my-coffee.webp -resize "1920x1080^" -gravity center -extent 1920x1080 -quality 85 hero/where-my-coffee-hero.webp
convert original/playing-on-rocks-secretplace.webp -resize "1920x1080^" -gravity center -extent 1920x1080 -quality 85 hero/playing-on-rocks-hero.webp

# OPTIMIZED (max width 1200px, preserve aspect ratio, quality 80)
echo "Creating OPTIMIZED images..."
for img in original/*.webp; do
    filename=$(basename "$img")
    convert "$img" -resize "1200x1200>" -quality 80 optimized/"$filename"
done

# THUMBNAILS (400x300)
echo "Creating THUMBNAILS..."
for img in original/*.webp; do
    filename=$(basename "$img")
    convert "$img" -resize "400x300^" -gravity center -extent 400x300 -quality 75 thumbnails/"$filename"
done

echo "Done!"
