#!/bin/bash

# Check if ImageMagick is installed
if ! command -v mogrify &>/dev/null; then
    echo "Error: ImageMagick is not installed. Install it using: sudo apt install imagemagick"
    exit 1
fi

# Process all JPG files in the current directory
for file in *.jpg *.JPG; do
    if [[ -f "$file" ]]; then
        # Convert filename to lowercase, replace spaces and underscores with dashes, and remove parentheses
        new_file=$(echo "$file" | tr '[:upper:]' '[:lower:]' | tr ' _' '--' | tr -d '()')
        
        # Resize, compress, and convert to progressive JPEG
        mogrify -resize 1400x1400 -quality 80 -interlace Plane "$file"
        
        # Rename the file if necessary
        if [[ "$file" != "$new_file" ]]; then
            mv "$file" "$new_file"
        fi
        
        echo "Processed: $new_file"
    fi
done