#!/bin/bash

# Install required packages
pip install -r requirements.txt

# Create __init__.py for kp_astro package
touch kp_astro/__init__.py

# Download Swiss Ephemeris files if not present
EPHE_DIR="/usr/share/ephe"
if [ ! -d "$EPHE_DIR" ]; then
    sudo mkdir -p "$EPHE_DIR"
    cd "$EPHE_DIR"
    sudo wget https://www.astro.com/ftp/swisseph/ephe/seas_18.se1
    sudo wget https://www.astro.com/ftp/swisseph/ephe/semo_18.se1
    sudo wget https://www.astro.com/ftp/swisseph/ephe/sepl_18.se1
    cd -
fi

# Start the FastAPI server
echo "Starting KP Astrology Backend..."
echo "API will be available at http://localhost:8000"
echo "API documentation at http://localhost:8000/docs"

python -m uvicorn kp_astro.main:app --host 0.0.0.0 --port 8000 --reload
