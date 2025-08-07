# Multiple Hostinger Deployment Guide

## 🎯 Overview

This guide shows how to deploy your SupplySide website to multiple Hostinger accounts simultaneously or selectively.

## 📋 Setup Requirements

### 1. GitHub Secrets Configuration

For each Hostinger account, create these secrets in GitHub (Settings → Secrets → Actions):

#### Primary Site
- `FTP_SERVER_PRIMARY`: 194.195.84.247
- `FTP_USERNAME_PRIMARY`: u282071750.SupplySide
- `FTP_PASSWORD_PRIMARY`: [your password]

#### Backup/Mirror Site
- `FTP_SERVER_BACKUP`: [second server IP]
- `FTP_USERNAME_BACKUP`: [second username]
- `FTP_PASSWORD_BACKUP`: [second password]

#### Staging Site
- `FTP_SERVER_STAGING`: [staging server IP]
- `FTP_USERNAME_STAGING`: [staging username]
- `FTP_PASSWORD_STAGING`: [staging password]

### 2. Choose Your Deployment Strategy

## 🚀 Strategy 1: Parallel Deployment (Fastest)

**File**: `.github/workflows/deploy-multiple-hostinger.yml`

**Benefits**:
- Deploys to all sites simultaneously
- Builds once, deploys many times
- Each deployment is independent
- Continues even if one fails

**Use When**:
- You want redundancy across multiple servers
- Sites are independent
- Speed is important

**How to Use**:
```bash
# Automatic deployment on push to main
git push origin main

# Manual deployment with workflow dispatch
# Go to Actions tab → Select workflow → Run workflow
```

## 📊 Strategy 2: Sequential Deployment

**File**: `.github/workflows/deploy-sequential.yml`

**Benefits**:
- Deploys one after another
- Can stop if one fails
- Uses less GitHub Actions minutes
- Easier to debug

**Use When**:
- You want to ensure primary succeeds before backup
- Limited GitHub Actions minutes
- Order matters

## 🔄 Strategy 3: Matrix Deployment (Most Flexible)

**File**: `.github/workflows/deploy-matrix.yml`

**Benefits**:
- Deploy to selected environments only
- Can limit parallel deployments
- Most configurable
- Great for many sites

**Use When**:
- You have 3+ deployment targets
- Want selective deployment
- Need environment-specific builds

**How to Use**:
```bash
# Deploy to all on push
git push origin main

# Deploy to specific environments only
# Go to Actions → Run workflow → Enter: "prod,staging"
```

## 🔧 Advanced Configurations

### Different Build Configs per Site

```yaml
- name: Build for ${{ matrix.environment }}
  run: |
    if [ "${{ matrix.environment }}" == "staging" ]; then
      echo "VITE_API_URL=https://staging-api.example.com" >> .env
    else
      echo "VITE_API_URL=https://api.example.com" >> .env
    fi
    npm run build
```

### Conditional Deployment

```yaml
# Only deploy to production on tagged releases
- name: Deploy to Production
  if: startsWith(github.ref, 'refs/tags/v')
  uses: SamKirkland/FTP-Deploy-Action@v4.3.5
```

### Different Directories per Site

```yaml
# Main domain
server-dir: ./

# Subdomain or subdirectory
server-dir: ./staging/

# Different structure
server-dir: ./public_html/
```

## 📈 Monitoring Multiple Deployments

### GitHub Actions Dashboard
- View all deployments at once
- See which succeeded/failed
- Check deployment times

### Custom Notifications

Add to any workflow:
```yaml
- name: Notify Deployment Status
  if: always()
  run: |
    if [ "${{ job.status }}" == "success" ]; then
      echo "✅ Deployed to ${{ matrix.environment }}"
    else
      echo "❌ Failed to deploy to ${{ matrix.environment }}"
    fi
```

## 🛠️ Troubleshooting

### Issue: Different Credentials Format
Some Hostinger accounts might use different username formats:
- `u12345678`
- `u12345678.domain`
- `u12345678@domain.com`

Always check in Hostinger hPanel → Files → FTP Accounts

### Issue: State File Conflicts
Each deployment needs its own state file:
```yaml
state-name: .ftp-deploy-${{ matrix.environment }}.json
```

### Issue: Rate Limiting
If deploying to many sites:
```yaml
strategy:
  matrix:
    environment: [site1, site2, site3, site4, site5]
  max-parallel: 2  # Limit to 2 at a time
```

## 💡 Best Practices

1. **Always Test Staging First**
   ```yaml
   deploy-staging:
     # ... deployment steps
   
   deploy-production:
     needs: deploy-staging  # Only after staging succeeds
   ```

2. **Use Descriptive Secret Names**
   - Bad: `FTP_SERVER_2`
   - Good: `FTP_SERVER_STAGING_US_EAST`

3. **Keep State Files Separate**
   - Different state file per environment
   - Add to .gitignore: `*.ftp-deploy-*.json`

4. **Version Your Deployments**
   ```yaml
   - name: Tag Deployment
     run: |
       echo "Deployed version: ${{ github.sha }}" > version.txt
   ```

## 🎯 Quick Start

1. Choose a strategy (parallel, sequential, or matrix)
2. Copy the workflow file to `.github/workflows/`
3. Set up GitHub secrets for each Hostinger account
4. Commit and push to trigger deployment

## 📝 Example: Two Sites (Primary + Backup)

```yaml
name: Deploy to Primary and Backup

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: |
          npm ci
          npm run build
          
      - name: Deploy to Primary
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          protocol: ftps
          local-dir: ./dist/
          server-dir: ./
          
      - name: Deploy to Backup
        if: success()
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER_BACKUP }}
          username: ${{ secrets.FTP_USERNAME_BACKUP }}
          password: ${{ secrets.FTP_PASSWORD_BACKUP }}
          protocol: ftps
          local-dir: ./dist/
          server-dir: ./
```