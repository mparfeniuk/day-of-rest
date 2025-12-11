#!/usr/bin/env python3
"""
Script to remove background from image, keeping only the girl and painting.
Uses rembg library for background removal.
"""

import sys
import os
from pathlib import Path

try:
    from rembg import remove
    from PIL import Image
except ImportError:
    print("Installing required packages...")
    os.system("pip3 install rembg pillow --quiet")
    from rembg import remove
    from PIL import Image

def remove_background(input_path, output_path):
    """Remove background from image and save as PNG with transparency."""
    print(f"Processing {input_path}...")
    
    with open(input_path, 'rb') as input_file:
        input_data = input_file.read()
    
    # Remove background
    output_data = remove(input_data)
    
    # Save as PNG
    with open(output_path, 'wb') as output_file:
        output_file.write(output_data)
    
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    # Default: process most likely file
    input_file = "public/images/PXL_20250820_134545591.jpg"
    
    if len(sys.argv) > 1:
        input_file = sys.argv[1]
    
    if not os.path.exists(input_file):
        print(f"Error: File {input_file} not found")
        print("\nAvailable JPG files:")
        img_dir = Path("public/images")
        for f in sorted(img_dir.glob("*.jpg")):
            print(f"  - {f}")
        sys.exit(1)
    
    # Output filename: same name but .png
    output_file = str(Path(input_file).with_suffix('.png'))
    
    remove_background(input_file, output_file)
    print("Done!")

