# Deployment Setup Guide

## GitHub Repository Setup

1. Create a new GitHub repository (if not already created)
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## GitHub Secrets Setup

Add the following secrets to your GitHub repository (Settings > Secrets and variables > Actions):

1. `EC2_SSH_PRIVATE_KEY`: Your EC2 instance's private key content
   - Copy the content of your .pem file
   - Include the entire key including "-----BEGIN RSA PRIVATE KEY-----" and "-----END RSA PRIVATE KEY-----"

2. `EC2_HOST`: Your EC2 instance's public IP address
   - Example: 54.83.235.5

3. `EC2_USER`: The EC2 instance's username
   - Use: ec2-user

## EC2 Setup

1. Install Node.js and PM2 on your EC2 instance:
```bash
# Connect to your EC2 instance
ssh -i "Lakshmi_Hayagreever.pem" ec2-user@54.83.235.5

# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Install PM2 globally
npm install -g pm2
```

2. Create the project directory:
```bash
mkdir -p ~/astrobalendar/04_frontend_web_react
```

## Deployment Process

The deployment will be automated through GitHub Actions:

1. Every push to the main branch will trigger the deployment
2. GitHub Actions will:
   - Build the application
   - Deploy to EC2
   - Restart the application using PM2

## Manual Deployment (if needed)

You can also deploy manually using the deployment script:
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

## Monitoring

Monitor your application using PM2:
```bash
pm2 status
pm2 logs frontend
```

## Troubleshooting

If you encounter any issues:

1. Check PM2 logs:
```bash
pm2 logs frontend
```

2. Check GitHub Actions logs in your repository's Actions tab

3. Verify EC2 permissions:
```bash
ls -la ~/astrobalendar/04_frontend_web_react
```

4. Check Node.js and PM2 installation:
```bash
node -v
pm2 -v
