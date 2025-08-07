# SupplySide Flooring Website - Development Notes

## 🚨 CRITICAL DEPLOYMENT GUIDANCE 🚨

### GitHub Workflows - DO NOT TRIGGER MULTIPLE DEPLOYMENTS

**IMPORTANT**: This project uses GitHub Actions for automatic deployment to Hostinger. Be extremely careful with commits to avoid triggering multiple concurrent deployments.

#### Best Practices:
1. **Batch your changes** - Make all related changes in a single commit instead of multiple small commits
2. **Use `git add -A && git commit` in one command** - This ensures atomic commits
3. **Check git status before committing** to see what will be included
4. **Never commit incomplete work** - Each commit should be a complete, working state
5. **If you need to make multiple related changes, do them all before committing**

#### Current Workflow Status:
- **File**: `.github/workflows/deploy-to-hostinger.yml`
- **Trigger**: Pushes to `main` branch
- **Target**: Hostinger FTP server
- **Critical Setting**: `server-dir: public_html/` (NOT `./` - this causes nested directory issues)

### Hostinger FTP Deployment Configuration

#### ✅ CORRECT Configuration:
```yaml
server-dir: public_html/
```

#### ❌ WRONG Configuration (causes 404 errors):
```yaml
server-dir: ./
```

#### Why This Matters:
- Hostinger expects files in the `public_html/` directory
- Using `./` creates a nested `public_html/public_html/` structure
- This results in 404 errors because files aren't in the expected location
- The workflow was previously broken due to this exact issue (fixed in commit 34adb38)

### Build and Deployment Process:

1. **Build Command**: `npm run build`
   - Compiles TypeScript
   - Runs Vite build with optimizations
   - Copies static files and images
   - Creates `dist/` folder with production assets

2. **GitHub Actions Workflow**:
   - Checks out code
   - Sets up Node.js
   - Installs dependencies
   - Runs build process
   - Uploads `dist/` contents to Hostinger via FTP
   - **Key**: Files go directly to `public_html/` root

3. **Post-Deployment**:
   - Site available at https://supplysideflooringinstallation.com
   - `.htaccess` file handles routing for React Router
   - Images served from `/images/` directory

### Performance Optimizations in Place:

- **Bundle Splitting**: React vendor chunks, router, helmet, icons separated
- **Compression**: Gzip and Brotli compression enabled
- **Image Optimization**: WebP format, 80-100KB target size
- **Code Splitting**: Dynamic imports for better loading
- **Resource Hints**: DNS prefetch, preconnect, preload in index.html

### Color Scheme & Styling:

#### Current Theme:
- **Homepage**: Alternating navy (`bg-deep-navy`) and light sections for visual flow
  - Hero: Background image with overlay
  - About: Navy background with white text
  - ContactForm: Navy background with white text
  - Service Area: White background
  - CTA Section: Navy background with white text

- **Service Pages**: Maximum contrast with only:
  - `bg-crisp-white` (pure white)
  - `bg-light-gray` (light off-white)
  - `bg-deep-charcoal` footer (dark)

#### Key Colors:
- **Navy**: `bg-deep-navy` (#1B2838) - Use white/gray-300 text only
- **Charcoal**: `bg-deep-charcoal` (#1A1A1A) - Almost black, use white text
- **Accent**: `text-burnt-sienna` (#A0522D) - Primary CTA color
- **White**: `bg-crisp-white` (#FFFFFF)
- **Off-white**: `bg-light-gray` (#F8F8F8)

### Project Structure:

#### Key Directories:
- `/src/components/` - React components organized by type
- `/src/pages/` - Route components (Home, Contact, FAQ, ServiceDetail)
- `/src/data/` - Static data (services, company info, FAQs)
- `/public/images/` - Optimized images (WebP format)
- `/dist/` - Built production files (created by build process)

#### Important Files:
- `vite.config.ts` - Build configuration with optimizations
- `tailwind.config.js` - Color scheme and typography settings
- `.github/workflows/deploy-to-hostinger.yml` - Deployment automation
- `copy-static-files.js` - Copies images and .htaccess to dist

### Common Commands:

```bash
# Development
npm run dev

# Build for production (ALWAYS run before committing)
npm run build

# Optimize images (if new images added)
node optimize-images.js

# Check git status before committing
git status

# Atomic commit (preferred method)
git add -A && git commit -m "Your commit message"

# Push (triggers deployment)
git push origin main
```

### Troubleshooting:

#### 🚨 If GitHub Actions deploys but 0 files sent to Hostinger:

**MOST COMMON CAUSES:**

1. **Build folder doesn't exist or is empty**:
   ```bash
   # Check if dist/ folder exists after build
   npm run build
   ls -la dist/
   ```
   - If `dist/` is empty, build is failing silently
   - Check build logs in GitHub Actions

2. **Wrong local-dir path in workflow**:
   ```yaml
   # CORRECT (note the trailing slash):
   local-dir: ./dist/
   
   # WRONG (missing trailing slash):
   local-dir: ./dist
   ```

3. **FTP credentials are wrong or expired**:
   - Check GitHub repository secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
   - Verify credentials work by testing manual FTP connection
   - Hostinger sometimes changes FTP settings

4. **Build process fails but workflow continues**:
   - Add explicit error handling to build step
   - Check if `npm run build` actually succeeds locally

5. **File permissions or FTP directory doesn't exist**:
   - Ensure `public_html/` directory exists on server
   - Check if FTP user has write permissions

**DEBUGGING STEPS:**

1. **Check GitHub Actions logs**:
   - Go to repository → Actions tab
   - Click on failed workflow
   - Look for "Build Vite site" step errors
   - Look for "Deploy to Hostinger" step - should show file count

2. **Verify build works locally**:
   ```bash
   npm ci
   npm run build
   ls -la dist/
   # Should show index.html, assets/, images/, etc.
   ```

3. **Test FTP credentials**:
   ```bash
   # Use FTP client to test connection
   ftp your-ftp-server.com
   # Enter username/password
   # Try to upload a test file
   ```

4. **Add debugging to workflow**:
   ```yaml
   - name: List dist contents
     run: |
       ls -la dist/
       du -sh dist/
   
   - name: Deploy to Hostinger
     uses: SamKirkland/FTP-Deploy-Action@v4.3.5
     with:
       # ... existing config ...
       log-level: verbose  # This shows detailed upload logs
   ```

#### If site shows 404:
1. Check `.github/workflows/deploy-to-hostinger.yml`
2. Ensure `server-dir: public_html/`
3. Check if multiple deployments are running simultaneously
4. Verify build succeeded before deployment

#### If styles broken:
1. Check if build process completed successfully
2. Verify CSS file is being generated in `/dist/assets/`
3. Check if .htaccess file was copied correctly

#### If images not loading:
1. Verify images are in `/public/images/` directory
2. Check `copy-static-files.js` is running in build process
3. Ensure image paths are correct (start with `/images/`)

### Recent Major Changes:
- Fixed deployment 404 by correcting FTP server directory
- Implemented comprehensive performance optimizations
- Updated color scheme for better visual flow and contrast
- Created separate FAQ page at `/faq` route
- Fixed text colors on navy backgrounds

---
*Last updated: 2025-01-08*
*Current commit: 79a8301*