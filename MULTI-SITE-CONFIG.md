# Multi-Site Deployment Configuration

# This file shows examples of deploying to multiple Hostinger accounts
# Choose the approach that best fits your needs

## Quick Setup for 2 Sites (Primary + Backup)

### 1. Add these secrets to GitHub:
```
Primary Site:
FTP_SERVER = 194.195.84.247
FTP_USERNAME = u282071750.SupplySide
FTP_PASSWORD = [your password]

Backup Site:
FTP_SERVER_BACKUP = [backup server IP]
FTP_USERNAME_BACKUP = [backup username]
FTP_PASSWORD_BACKUP = [backup password]
```

### 2. Add to your workflow after primary deployment:
```yaml
- name: Deploy to Backup Site
  if: success()  # Only if primary succeeded
  uses: SamKirkland/FTP-Deploy-Action@v4.3.5
  with:
    server: ${{ secrets.FTP_SERVER_BACKUP }}
    username: ${{ secrets.FTP_USERNAME_BACKUP }}
    password: ${{ secrets.FTP_PASSWORD_BACKUP }}
    protocol: ftps
    port: 21
    local-dir: ./dist/
    server-dir: ./
    state-name: ftp-deploy-backup.json
```

## For Regional Deployments (US + EU + Asia)

### Secrets needed:
```
US Site:
FTP_SERVER_US
FTP_USERNAME_US
FTP_PASSWORD_US

EU Site:
FTP_SERVER_EU
FTP_USERNAME_EU
FTP_PASSWORD_EU

Asia Site:
FTP_SERVER_ASIA
FTP_USERNAME_ASIA
FTP_PASSWORD_ASIA
```

## For Different Environments (Dev/Staging/Prod)

### Branch-based deployment:
```yaml
on:
  push:
    branches:
      - main        # → Production
      - staging     # → Staging
      - develop     # → Development
```

## Load Balancing Setup

Deploy to multiple servers for load balancing:
1. Server A (Primary): handles 50% traffic
2. Server B (Secondary): handles 50% traffic
3. Server C (Backup): standby/failover

Use the parallel deployment workflow for this setup.