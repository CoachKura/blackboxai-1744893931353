#!/bin/bash

# Install PM2 if not installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Navigate to project directory
cd /home/ec2-user/astrobalendar/04_frontend_web_react

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Start/Restart the application with PM2
if pm2 list | grep -q "frontend"; then
    echo "Restarting frontend application..."
    pm2 restart frontend
else
    echo "Starting frontend application..."
    pm2 start npm --name "frontend" -- start
fi

# Save PM2 process list
pm2 save

echo "Deployment completed successfully!"
