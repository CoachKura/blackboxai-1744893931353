#!/bin/bash

# Exit on any error
set -e

# Install Netlify CLI if not installed
if ! command -v netlify &> /dev/null; then
    echo "Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Build the application
echo "Building application..."
npm run build

# Deploy to Netlify
echo "Deploying to Netlify..."
netlify deploy --prod --dir=build

echo "Deployment completed!"
echo "Your site should be live at https://astrobalendar.com"
echo ""
echo "To verify deployment:"
echo "1. Visit https://astrobalendar.com"
echo "2. Check Netlify dashboard for deployment status"
echo "3. Verify all pages are loading correctly"
echo "4. Test the contact form and other interactive features"
