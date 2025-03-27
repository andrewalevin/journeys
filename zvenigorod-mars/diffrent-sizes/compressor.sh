#!/bin/bash

# Check if ImageMagick is installed
if ! command -v magick &>/dev/null; then
    echo "Error: ImageMagick is not installed. Install it using: sudo apt install imagemagick"
    exit 1
fi

# Check if a resize dimension is provided, otherwise use default
resize_dim="${1:-1900}"

# Regular expression pattern to match filenames ending in "-<digits>px"
pattern='-[0-9]+px\.'

# Process all JPG files in the current directory
for file in *.jpg *.JPG; do
    if [[ -f "$file" ]]; then
        # Skip files that already contain "-<digits>px" before the extension
        if [[ "$file" =~ $pattern ]]; then
            echo "Skipping: $file (already resized)"
            continue
        fi

        # Get file extension
        ext="${file##*.}"
        
        # Get filename without extension
        base="${file%.*}"
        
        # Append resize dimension before suffix
        new_file="${base}-${resize_dim}px.${ext}"
        
        # Ensure we don't overwrite an existing file
        if [[ -f "$new_file" ]]; then
            echo "Skipping: $file -> $new_file (already exists)"
            continue
        fi
        
        # Resize, compress, and convert to progressive JPEG (without modifying the original)
        magick convert "$file" -resize "${resize_dim}x${resize_dim}" -quality 80 -interlace Plane "$new_file"
        
        echo "Processed: $new_file"
    fi
done