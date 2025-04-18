# AstroBalendar Deployment Guide

This guide explains how to deploy AstroBalendar to an AWS EC2 instance.

## Prerequisites

1. An AWS account with EC2 access
2. A registered domain (astrobalendar.com)
3. Basic knowledge of AWS and Linux commands

## Initial Setup

1. Launch an EC2 instance:
   - Amazon Linux 2 AMI
   - t2.micro or larger
   - Configure security group to allow:
     - HTTP (80)
     - HTTPS (443)
     - SSH (22)

2. Configure your domain:
   - Point your domain's A record to your EC2 instance's public IP
   - Add both www.astrobalendar.com and astrobalendar.com

## Server Setup

1. Connect to your EC2 instance:
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-ip
   ```

2. Make the setup script executable and run it:
   ```bash
   chmod +x scripts/setup-ec2.sh
   ./scripts/setup-ec2.sh
   ```

3. Set up SSL certificate:
   ```bash
   sudo certbot --nginx -d astrobalendar.com -d www.astrobalendar.com
   ```

## Deployment

1. Update the deployment configuration:
   - Edit `scripts/deploy.sh`
   - Set your EC2 instance IP in `EC2_HOST`

2. Make the deployment script executable:
   ```bash
   chmod +x scripts/deploy.sh
   ```

3. Deploy the application:
   ```bash
   ./scripts/deploy.sh
   ```

## Maintenance

### SSL Certificate Renewal
Certbot automatically renews certificates before they expire. To manually renew:
```bash
sudo certbot renew
```

### Monitoring
Monitor the application using PM2:
```bash
pm2 status
pm2 logs
```

### Nginx
Common Nginx commands:
```bash
sudo systemctl status nginx  # Check status
sudo systemctl restart nginx # Restart
sudo nginx -t               # Test configuration
```

## Troubleshooting

1. Check Nginx logs:
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```

2. Check application logs:
   ```bash
   pm2 logs
   ```

3. Check SSL certificate:
   ```bash
   sudo certbot certificates
   ```

## Backup

1. Database backups (when implemented):
   - Set up automated backups
   - Store backups in S3

2. Application files:
   ```bash
   # From your local machine
   rsync -avz ec2-user@your-ec2-ip:/var/www/astrobalendar ./backup/
   ```

## Security Considerations

1. Keep the system updated:
   ```bash
   sudo yum update -y
   ```

2. Monitor security groups and limit access

3. Regularly check and update dependencies:
   ```bash
   npm audit
   npm update
   ```

4. Enable and configure AWS CloudWatch for monitoring

## Support

For any deployment issues:
1. Check the application logs
2. Verify Nginx configuration
3. Ensure all services are running
4. Check security group settings
5. Verify domain DNS settings

Remember to always test in a staging environment before deploying to production.
