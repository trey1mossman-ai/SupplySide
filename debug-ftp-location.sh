#!/bin/bash

# FTP Manual Check Script
# This will help you find where files are being uploaded

echo "=== Manual FTP Check for OLD Hostinger ==="
echo "Server: 185.212.71.198"
echo "Username: u921052894.SupplySide"
echo ""

# Option 1: Using macOS built-in ftp
echo "Option 1: Using ftp command"
echo "Run these commands:"
echo ""
echo "ftp ftps://u921052894.SupplySide@185.212.71.198"
echo "# Enter password when prompted"
echo "pwd                    # Shows current directory"
echo "ls -la                 # List files"
echo "cd public_html         # Try to enter public_html"
echo "ls -la                 # Check if your files are here"
echo "cd ..                  # Go back"
echo "cd domains             # Try domains directory"
echo "ls -la                 # List domains"
echo "quit"
echo ""

# Option 2: Using lftp (if installed)
echo "Option 2: Using lftp (better)"
echo "First install: brew install lftp"
echo ""
echo "lftp -u u921052894.SupplySide ftps://185.212.71.198:21"
echo "# Enter password"
echo "set ssl:verify-certificate no"
echo "pwd"
echo "find . -name index.html"
echo "bye"
echo ""

# Option 3: Try different username
echo "Option 3: Try alternate username"
echo "Username: u921052894.mediumblue-chamois-837591.hostingersite.com"
echo ""

echo "=== Most Likely Solution ==="
echo "Your files are probably in one of these locations:"
echo "1. /home/u921052894/public_html/"
echo "2. /home/u921052894/domains/mediumblue-chamois-837591.hostingersite.com/public_html/"
echo "3. /public_html/"
echo ""
echo "The GitHub Action is probably putting files in the wrong directory."