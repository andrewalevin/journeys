#!/bin/bash

# Check if a directory is provided, otherwise use the current directory
dir=${1:-.}

# Loop through files in the directory
for file in "$dir"/*; do
    # Skip directories
    [ -f "$file" ] || continue
    
    # Extract directory and filename
    dirpath=$(dirname -- "$file")
    filename=$(basename -- "$file")
    
    # Convert to lowercase
    newname=$(echo "$filename" | tr '[:upper:]' '[:lower:]')
    
    # Replace spaces with dashes
    newname=$(echo "$newname" | tr ' ' '-')
    
    # Replace underscores with dashes
    newname=$(echo "$newname" | tr '_' '-')
    
    # Remove or replace special characters
    newname=$(echo "$newname" | sed -E 's/[^a-z0-9.-]+/-/g')
    
    # Remove consecutive dashes
    newname=$(echo "$newname" | sed -E 's/-+/-/g')
    
    # Remove leading or trailing dashes
    newname=$(echo "$newname" | sed -E 's/^-+|-+$//g')
    
    # Ensure there is no dash before the file extension
    newname=$(echo "$newname" | sed -E 's/-(\.[a-z0-9]+)$/\1/')
    
    # Rename the file if the name has changed
    if [[ "$filename" != "$newname" ]]; then
        mv -v -- "$file" "$dirpath/$newname"
    fi
done
