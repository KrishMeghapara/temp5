# Deploying to Render

This guide will help you deploy your React documentation site to Render.

## Prerequisites

1. A GitHub account
2. A Render account (sign up at https://render.com)
3. Git installed on your machine

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)

```bash
cd api-docs
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "api-docs")
3. Don't initialize with README (you already have files)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Deploy on Render

#### Option A: Using render.yaml (Recommended)

1. Go to https://dashboard.render.com
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click "Apply" to deploy

#### Option B: Manual Setup

1. Go to https://dashboard.render.com
2. Click "New" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: api-docs (or your chosen name)
   - **Branch**: main
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
5. Click "Create Static Site"

### 5. Wait for Deployment

- Render will install dependencies and build your app
- This usually takes 2-5 minutes
- You'll get a live URL like: `https://your-app-name.onrender.com`

## Custom Domain (Optional)

1. In Render dashboard, go to your site settings
2. Click "Custom Domain"
3. Add your domain and follow DNS configuration instructions

## Automatic Deployments

Every time you push to GitHub, Render will automatically rebuild and deploy your site.

```bash
# Make changes to your code
git add .
git commit -m "Update documentation"
git push
```

## Environment Variables (if needed)

If you need environment variables:
1. Go to your site in Render dashboard
2. Click "Environment"
3. Add variables as needed

## Troubleshooting

### Build Fails
- Check the build logs in Render dashboard
- Ensure all dependencies are in package.json
- Try building locally first: `npm run build`

### 404 Errors on Refresh
- The render.yaml includes routing configuration to handle this
- All routes redirect to index.html for client-side routing

### Slow Initial Load
- This is normal for free tier
- Consider upgrading to paid tier for better performance

## Free Tier Limitations

- Site may spin down after inactivity
- First load after inactivity may be slow (30-60 seconds)
- 100GB bandwidth per month

## Support

For issues, check:
- Render documentation: https://render.com/docs
- Build logs in Render dashboard
- GitHub repository issues
