#!/bin/bash

echo "Setting up EC2 instance for AstroBalendar..."

# Update system packages
echo "Updating system packages..."
sudo yum update -y

# Install Node.js
echo "Installing Node.js..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Install PM2 globally
echo "Installing PM2..."
npm install -g pm2

# Install Nginx
echo "Installing Nginx..."
sudo amazon-linux-extras install nginx1 -y

# Start Nginx
echo "Starting Nginx..."
sudo systemctl start nginx
sudo systemctl enable nginx

# Create project directory
echo "Creating project directory..."
mkdir -p ~/astrobalendar/04_frontend_web_react

# Configure Nginx
echo "Configuring Nginx..."
sudo tee /etc/nginx/conf.d/astrobalendar.conf > /dev/null <<EOL
server {
    listen 80;
    server_name astrobalendar.com www.astrobalendar.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Restart Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

# Set up PM2 startup script
echo "Setting up PM2 startup..."
pm2 startup
sudo env PATH=$PATH:/home/ec2-user/.nvm/versions/node/v18/bin /home/ec2-user/.nvm/versions/node/v18/lib/node_modules/pm2/bin/pm2 startup systemd -u ec2-user --hp /home/ec2-user

echo "Setup complete! Your EC2 instance is ready for deployment."
echo "Next steps:"
echo "1. Configure your domain DNS settings"
echo "2. Set up SSL certificate"
echo "3. Deploy your application"
