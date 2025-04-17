#!/bin/bash

# Build script for AstroBalendar production deployment

echo "Starting production build process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the production version
echo "Building production version..."
npm run build

# Create production directory if it doesn't exist
echo "Setting up production directory..."
mkdir -p /var/www/astrobalendar

# Copy build files to production directory
echo "Copying build files..."
sudo cp -r build/* /var/www/astrobalendar/

# Set correct permissions
echo "Setting permissions..."
sudo chown -R nginx:nginx /var/www/astrobalendar
sudo chmod -R 755 /var/www/astrobalendar

# Create Nginx configuration
echo "Configuring Nginx..."
sudo tee /etc/nginx/conf.d/astrobalendar.conf > /dev/null <<EOL
server {
    listen 80;
    server_name astrobalendar.com www.astrobalendar.com;
    root /var/www/astrobalendar;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 7d;
        add_header Cache-Control "public, no-transform";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
EOL

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx if test passes
if [ $? -eq 0 ]; then
    echo "Restarting Nginx..."
    sudo systemctl restart nginx
    echo "Deployment complete! Your site should be live at http://astrobalendar.com"
else
    echo "Nginx configuration test failed. Please check the configuration."
    exit 1
fi
