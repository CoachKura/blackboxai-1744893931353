#!/bin/bash

# Exit on any error
set -e

# Configuration
APP_NAME="astrobalendar"
DOMAIN="astrobalendar.com"
EC2_USER="ec2-user"
EC2_HOST="your-ec2-instance-ip"
DEPLOY_PATH="/var/www/astrobalendar"

# Build the application
echo "Building application..."
npm run build

# Create deployment directory if it doesn't exist
ssh $EC2_USER@$EC2_HOST "mkdir -p $DEPLOY_PATH"

# Copy build files to EC2
echo "Copying files to server..."
rsync -avz --delete build/ $EC2_USER@$EC2_HOST:$DEPLOY_PATH/

# Install dependencies on server
echo "Installing dependencies..."
ssh $EC2_USER@$EC2_HOST "cd $DEPLOY_PATH && npm install --production"

# Restart the application
echo "Restarting application..."
ssh $EC2_USER@$EC2_HOST "pm2 restart $APP_NAME || pm2 start npm --name $APP_NAME -- start"

echo "Deployment completed successfully!"
