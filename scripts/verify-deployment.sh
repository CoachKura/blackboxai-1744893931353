#!/bin/bash

# Exit on any error
set -e

# Configuration
DOMAIN="astrobalendar.com"
EC2_USER="ec2-user"
EC2_HOST="your-ec2-instance-ip"
APP_NAME="astrobalendar"

echo "Verifying deployment..."

# Check if Nginx is running
echo "Checking Nginx status..."
ssh $EC2_USER@$EC2_HOST "sudo systemctl is-active nginx" || {
    echo "Error: Nginx is not running"
    exit 1
}

# Check if SSL certificate is valid
echo "Checking SSL certificate..."
ssl_expiry=$(ssh $EC2_USER@$EC2_HOST "sudo certbot certificates | grep 'Expiry Date' | awk '{print \$3,\$4,\$5}'")
echo "SSL certificate expires: $ssl_expiry"

# Check if application is running via PM2
echo "Checking PM2 process..."
ssh $EC2_USER@$EC2_HOST "pm2 show $APP_NAME" || {
    echo "Error: Application is not running in PM2"
    exit 1
}

# Check if website is accessible
echo "Checking website accessibility..."
curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN | grep 200 || {
    echo "Error: Website is not accessible"
    exit 1
}

# Check application logs for errors
echo "Checking application logs for errors..."
ssh $EC2_USER@$EC2_HOST "pm2 logs $APP_NAME --lines 100 | grep -i error" || {
    echo "No errors found in recent logs"
}

# Check Nginx error logs
echo "Checking Nginx error logs..."
ssh $EC2_USER@$EC2_HOST "sudo tail -n 50 /var/log/nginx/error.log | grep -i error" || {
    echo "No errors found in Nginx logs"
}

# Check disk space
echo "Checking disk space..."
ssh $EC2_USER@$EC2_HOST "df -h | grep -v tmpfs"

# Check memory usage
echo "Checking memory usage..."
ssh $EC2_USER@$EC2_HOST "free -h"

# Check CPU load
echo "Checking CPU load..."
ssh $EC2_USER@$EC2_HOST "uptime"

echo "Deployment verification completed successfully!"
echo "Website: https://$DOMAIN"
