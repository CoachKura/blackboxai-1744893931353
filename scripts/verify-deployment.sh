#!/bin/bash

# Verification script for AstroBalendar deployment

echo "Verifying deployment..."

# Check if Nginx is running
echo "Checking Nginx status..."
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx is running"
else
    echo "❌ Nginx is not running"
    echo "Starting Nginx..."
    sudo systemctl start nginx
fi

# Check if website files exist
echo "Checking website files..."
if [ -f "/var/www/astrobalendar/index.html" ]; then
    echo "✅ Website files found"
else
    echo "❌ Website files not found"
fi

# Check if Nginx configuration is valid
echo "Checking Nginx configuration..."
if sudo nginx -t; then
    echo "✅ Nginx configuration is valid"
else
    echo "❌ Nginx configuration has errors"
fi

# Check if domain is resolving
echo "Checking domain resolution..."
if host astrobalendar.com; then
    echo "✅ Domain is resolving"
else
    echo "❌ Domain resolution failed"
fi

# Check if website is accessible
echo "Checking website accessibility..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost; then
    echo "✅ Website is accessible"
else
    echo "❌ Website is not accessible"
fi

echo "Verification complete!"
echo "Visit http://astrobalendar.com to view your website"
