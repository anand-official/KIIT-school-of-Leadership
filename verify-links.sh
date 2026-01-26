#!/bin/bash
################################################################################
# Link Verification Script
# Checks all HTML files for broken internal references
################################################################################

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║        KIIT SLD - Link & Reference Verification Tool           ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

BROKEN=0
CHECKED=0

echo -e "${GREEN}Checking for broken internal references...${NC}"
echo ""

# Check for references to deleted files
DELETED_FILES=(
    "index_new.html"
    "home.html"
    "design-system.html"
    "main.css"
    "button-fix.css"
    "production-polish.css"
)

for file in *.html; do
    if [ -f "$file" ]; then
        for deleted in "${DELETED_FILES[@]}"; do
            if grep -q "$deleted" "$file" 2>/dev/null; then
                echo -e "${RED}✗ BROKEN:${NC} $file references deleted file: $deleted"
                BROKEN=$((BROKEN + 1))
            fi
            CHECKED=$((CHECKED + 1))
        done
    fi
done

# Check for broken image references
echo ""
echo -e "${GREEN}Checking image references...${NC}"
echo ""

for file in *.html; do
    if [ -f "$file" ]; then
        # Extract image src attributes
        grep -oP 'src=["'"'"']\K[^"'"'"']+(?=["'"'"'])' "$file" 2>/dev/null | while read -r img; do
            # Skip external URLs
            if [[ "$img" =~ ^http ]]; then
                continue
            fi
            # Check if local file exists
            if [ ! -f "$img" ]; then
                echo -e "${RED}✗ BROKEN IMAGE:${NC} $file → $img (not found)"
                BROKEN=$((BROKEN + 1))
            fi
            CHECKED=$((CHECKED + 1))
        done
    fi
done

# Check CSS references
echo ""
echo -e "${GREEN}Checking CSS references...${NC}"
echo ""

for file in *.html; do
    if [ -f "$file" ]; then
        grep -oP 'href=["'"'"']\K[^"'"'"']+\.css(?=["'"'"'])' "$file" 2>/dev/null | while read -r css; do
            if [ ! -f "$css" ]; then
                echo -e "${RED}✗ BROKEN CSS:${NC} $file → $css (not found)"
                BROKEN=$((BROKEN + 1))
            fi
            CHECKED=$((CHECKED + 1))
        done
    fi
done

# Check JavaScript references
echo ""
echo -e "${GREEN}Checking JavaScript references...${NC}"
echo ""

for file in *.html; do
    if [ -f "$file" ]; then
        grep -oP 'src=["'"'"']\K[^"'"'"']+\.js(?=["'"'"'])' "$file" 2>/dev/null | while read -r js; do
            # Skip external URLs and CDN
            if [[ "$js" =~ ^http ]]; then
                continue
            fi
            if [ ! -f "$js" ]; then
                echo -e "${RED}✗ BROKEN JS:${NC} $file → $js (not found)"
                BROKEN=$((BROKEN + 1))
            fi
            CHECKED=$((CHECKED + 1))
        done
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✓ Verification Complete${NC}"
echo "  References checked: $CHECKED"
echo "  Broken references: $BROKEN"
echo ""

if [ $BROKEN -eq 0 ]; then
    echo -e "${GREEN}✓ No broken references found! Site is healthy.${NC}"
    exit 0
else
    echo -e "${RED}✗ Found $BROKEN broken reference(s). Please fix before deployment.${NC}"
    exit 1
fi
