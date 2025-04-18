#!/bin/bash
set -e

# Update system
sudo yum update -y
sudo yum install -y python3 python3-pip nginx git certbot python3-certbot-nginx

# Install Python dependencies
pip3 install --upgrade pip
pip3 install -r requirements.txt
pip3 install uvicorn gunicorn

# Install PM2 for process management
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
sudo npm install pm2 -g

# Configure Nginx
sudo tee /etc/nginx/conf.d/api.astrobalendar.com.conf << EOF
server {
    listen 80;
    server_name api.astrobalendar.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        
        # CORS headers
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
    }

    # Cache geocoding results
    location /api/geocode {
        proxy_pass http://localhost:8000;
        proxy_cache my_cache;
        proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
        proxy_cache_valid 200 24h;
    }
}
EOF

# Create cache directory for Nginx
sudo mkdir -p /var/cache/nginx
sudo chown -R nginx:nginx /var/cache/nginx

# Configure Nginx caching
sudo tee /etc/nginx/conf.d/cache.conf << EOF
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;
EOF

# Start services
sudo systemctl start nginx
sudo systemctl enable nginx

# Set up PM2 for the FastAPI application
pm2 start "gunicorn kp_astro.main:app -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8000" --name astrobalendar-api
pm2 save
pm2 startup

# Set up SSL with Certbot
sudo certbot --nginx -d api.astrobalendar.com --non-interactive --agree-tos --email admin@astrobalendar.com

# Create log directory
sudo mkdir -p /var/log/astrobalendar
sudo chown -R ec2-user:ec2-user /var/log/astrobalendar

echo "Setup complete! The API server is running at https://api.astrobalendar.com"
