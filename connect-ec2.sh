#!/bin/bash

# The path to your .pem file
PEM_FILE="/media/kura/MyExternalDrive/Key pair/Lakshmi_Hayagreever.pem"
EC2_HOST="54.83.235.5"
EC2_USER="ec2-user"

# Check if PEM file exists
if [ ! -f "$PEM_FILE" ]; then
    echo "Error: PEM file not found at $PEM_FILE"
    exit 1
fi

# Set correct permissions for PEM file
chmod 400 "$PEM_FILE"

# Connect to EC2
echo "Connecting to EC2 instance..."
ssh -i "$PEM_FILE" "$EC2_USER@$EC2_HOST"
