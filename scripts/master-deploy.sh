#!/bin/bash

# Master deployment script for AstroBalendar
# This script will:
# 1. Deploy the website
# 2. Set up SSL
# 3. Verify everything is working

echo "Starting master deployment for AstroBalendar..."

# Function to check if a command was successful
check_status() {
    if [ $? -eq 0 ]; then
        echo "✅ $1 successful"
    else
        echo "❌ $1 failed"
        exit 1
    fi
}

# 1. Deploy website
echo "Step 1: Deploying website..."
./quick-deploy.sh
check_status "Website deployment"

# 2. Set up SSL
echo "Step 2: Setting up SSL..."
./setup-ssl.sh
check_status "SSL setup"

# 3. Verify deployment
echo "Step 3: Verifying deployment..."
./verify-deployment.sh
check_status "Deployment verification"

# Final checks
echo "Performing final checks..."

# Check HTTPS access
echo "Testing HTTPS access..."
curl -I https://astrobalendar.com
check_status "HTTPS access"

# Check SSL certificate
echo "Checking SSL certificate..."
curl -vI https://astrobalendar.com 2>&1 | grep "SSL certificate"
check_status "SSL certificate verification"

echo "🎉 Deployment complete!"
echo "Your website is now live at: https://astrobalendar.com"
echo ""
echo "Next steps:"
echo "1. Visit https://astrobalendar.com to verify everything looks correct"
echo "2. Test the website on different devices"
echo "3. Consider setting up monitoring and analytics"
