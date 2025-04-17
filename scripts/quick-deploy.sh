#!/bin/bash

# Quick deployment script for AstroBalendar

echo "Starting quick deployment..."

# Install Nginx if not installed
if ! command -v nginx &> /dev/null; then
    echo "Installing Nginx..."
    sudo yum update -y
    sudo amazon-linux-extras install nginx1 -y
fi

# Start Nginx if not running
sudo systemctl start nginx
sudo systemctl enable nginx

# Create website directory
sudo mkdir -p /var/www/astrobalendar
sudo chown -R ec2-user:ec2-user /var/www/astrobalendar

# Copy website files
echo "Copying website files..."
cp -r index.html /var/www/astrobalendar/
cp -r media /var/www/astrobalendar/

# Configure Nginx
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
}
EOL

# Test and reload Nginx
sudo nginx -t && sudo systemctl reload nginx

echo "Deployment complete! Your site should be accessible at http://astrobalendar.com"
echo "Next step: Install SSL certificate for HTTPS"
