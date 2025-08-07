#!/bin/bash

echo "========================================="
echo "FTP Diagnostic Script for OLD Hostinger"
echo "========================================="
echo ""
echo "This script will help identify the correct FTP path"
echo "You'll need to enter the FTP password when prompted"
echo ""

# Test with first username format
echo "=== Testing with u921052894.SupplySide ==="
echo "Attempting connection to 185.212.71.198..."
echo ""

lftp << EOF
set ssl:verify-certificate no
set ftp:ssl-allow no
open ftp://u921052894.mediumblue-chamois-837591.hostingersite.com@185.212.71.198:21
echo "Current directory:"
pwd
echo ""
echo "Listing root directory:"
ls -la
echo ""
echo "Looking for domains directory:"
ls -la domains/ 2>/dev/null || echo "No 'domains' directory found in root"
echo ""
echo "Looking for public_html directory:"
ls -la public_html/ 2>/dev/null || echo "No 'public_html' directory found in root"
echo ""
echo "Checking specific domain path:"
ls -la domains/mediumblue-chamois-837591.hostingersite.com/ 2>/dev/null || echo "Domain path not found"
echo ""
echo "Looking for any index.html files:"
find . -name "index.html" -type f 2>/dev/null | head -10
bye
EOF

echo ""
echo "========================================="
echo "Diagnostic complete!"
echo "========================================="