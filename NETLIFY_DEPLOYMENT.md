# Deploying AstroBalendar to Netlify

Follow these steps to deploy the AstroBalendar website to Netlify.

## Prerequisites

1. A Netlify account
2. GitHub repository with your code
3. Node.js and npm installed locally

## Setup Steps

1. **Create a New Site on Netlify**

   Go to [Netlify](https://app.netlify.com) and:
   - Click "New site from Git"
   - Choose GitHub as your Git provider
   - Select your repository
   - Follow the authorization process

2. **Configure Build Settings**

   In Netlify's deploy settings:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 16.x

3. **Environment Variables**

   Set the following environment variables in Netlify's site settings:
   - Go to Site settings > Build & deploy > Environment
   - Add environment variables if needed

4. **Domain Settings**

   To set up your custom domain (astrobalendar.com):
   - Go to Site settings > Domain management
   - Click "Add custom domain"
   - Enter: astrobalendar.com
   - Follow the DNS configuration instructions
   - Enable HTTPS

5. **DNS Configuration**

   Add these DNS records at your domain registrar:
   ```
   Type    Name               Value
   A       astrobalendar.com  75.2.60.5
   CNAME   www               astrobalendar.netlify.app
   ```

## Deployment

### Automatic Deployments

Netlify will automatically deploy when you push to your main branch.

### Manual Deployment

To deploy manually:

1. Build the site locally:
   ```bash
   npm run build
   ```

2. Deploy using Netlify CLI:
   ```bash
   netlify deploy --prod
   ```

## Post-Deployment Checklist

1. Verify the site is working at https://astrobalendar.com
2. Check that all pages load correctly
3. Test the contact form
4. Verify SSL certificate is active
5. Test on multiple browsers and devices

## Troubleshooting

1. **Build Failures**
   - Check build logs in Netlify dashboard
   - Verify all dependencies are listed in package.json
   - Ensure node version is correct

2. **Domain Issues**
   - Verify DNS propagation (can take up to 48 hours)
   - Check DNS configuration
   - Verify SSL certificate status

3. **Performance Issues**
   - Use Netlify's analytics to identify problems
   - Check build output size
   - Verify asset optimization settings

## Monitoring

1. **Netlify Analytics**
   - Monitor site traffic
   - Track form submissions
   - Check for 404 errors

2. **Performance Monitoring**
   - Use Netlify's built-in performance monitoring
   - Check Core Web Vitals
   - Monitor page load times

## Security

1. **Headers**
   - Security headers are configured in netlify.toml
   - HTTPS is enforced
   - Content Security Policy is active

2. **Form Protection**
   - Honeypot fields are added
   - reCAPTCHA is enabled
   - Rate limiting is active

## Support

For deployment issues:
1. Check Netlify's status page
2. Review build logs
3. Contact Netlify support
4. Check GitHub issues

Remember to always test in a staging environment before deploying to production.
