#!/bin/bash

# SSL Setup Script for AstroBalendar

echo "Setting up SSL for astrobalendar.com..."

# Install certbot
echo "Installing certbot..."
sudo yum install -y python3-pip
sudo pip3 install certbot certbot-nginx

# Stop Nginx temporarily
sudo systemctl stop nginx

# Get SSL certificate
echo "Getting SSL certificate..."
sudo certbot certonly --standalone \
    --non-interactive \
    --agree-tos \
    --email admin@astrobalendar.com \
    --domains astrobalendar.com,www.astrobalendar.com

# Update Nginx configuration
echo "Updating Nginx configuration..."
sudo tee /etc/nginx/conf.d/astrobalendar.conf > /dev/null <<EOL
server {
    listen 80;
    server_name astrobalendar.com www.astrobalendar.com;
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name astrobalendar.com www.astrobalendar.com;

    ssl_certificate /etc/letsencrypt/live/astrobalendar.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/astrobalendar.com/privkey.pem;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    # Modern configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS (uncomment if you're sure)
    # add_header Strict-Transport-Security "max-age=63072000" always;

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
}
EOL

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Start Nginx
echo "Starting Nginx..."
sudo systemctl start nginx

# Set up auto-renewal
echo "Setting up SSL auto-renewal..."
(crontab -l 2>/dev/null; echo "0 0 * * * certbot renew --quiet --deploy-hook 'systemctl reload nginx'") | crontab -

echo "SSL setup complete! Your site should now be accessible via HTTPS."
echo "Visit https://astrobalendar.com to verify."
