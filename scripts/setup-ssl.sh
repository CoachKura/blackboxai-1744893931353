#!/bin/bash

# Exit on any error
set -e

# Configuration
DOMAIN="astrobalendar.com"
EMAIL="admin@astrobalendar.com"
EC2_USER="ec2-user"
EC2_HOST="your-ec2-instance-ip"

echo "Setting up SSL certificate for $DOMAIN..."

# Connect to EC2 and run commands
ssh $EC2_USER@$EC2_HOST << 'ENDSSH'
    # Ensure Nginx is running
    sudo systemctl start nginx
    sudo systemctl enable nginx

    # Install certbot if not already installed
    if ! command -v certbot &> /dev/null; then
        sudo yum install -y epel-release
        sudo yum install -y certbot python3-certbot-nginx
    fi

    # Stop Nginx temporarily
    sudo systemctl stop nginx

    # Get SSL certificate
    sudo certbot certonly --standalone \
        -d astrobalendar.com \
        -d www.astrobalendar.com \
        --email admin@astrobalendar.com \
        --agree-tos \
        --non-interactive

    # Update Nginx configuration
    sudo tee /etc/nginx/conf.d/astrobalendar.conf << 'EOF'
server {
    listen 80;
    server_name astrobalendar.com www.astrobalendar.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name astrobalendar.com www.astrobalendar.com;

    ssl_certificate /etc/letsencrypt/live/astrobalendar.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/astrobalendar.com/privkey.pem;

    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000" always;

    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;

    root /var/www/astrobalendar/build;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1000;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript;
    gzip_disable "MSIE [1-6]\.";
}
EOF

    # Test Nginx configuration
    sudo nginx -t

    # Start Nginx
    sudo systemctl start nginx

    # Setup auto-renewal
    sudo certbot renew --dry-run

    # Add renewal cron job
    (crontab -l 2>/dev/null; echo "0 0 1 * * /usr/bin/certbot renew --quiet") | crontab -

    echo "SSL setup completed successfully!"
ENDSSH

echo "SSL certificate has been set up successfully!"
echo "Please verify by visiting https://$DOMAIN"
