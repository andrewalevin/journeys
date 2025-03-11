#!/bin/bash

# Exit if any command fails
set -e

# Start from current directory, or use first argument
BASE_DIR="${1:-.}"

# Find all jpg/jpeg files recursively, case insensitive
find "$BASE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r file; do
    echo "Converting: $file"

    # Create a temporary file
    tmp_file="${file}.tmp"

    # Convert to progressive JPEG and overwrite the original
    jpegtran -copy none -optimize -progressive "$file" > "$tmp_file" && mv "$tmp_file" "$file"

    echo "Done: $file"
done

echo "All JPEGs converted to progressive in: $BASE_DIR"