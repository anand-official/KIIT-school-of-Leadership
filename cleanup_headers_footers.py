#!/usr/bin/env python3
import re
import os

os.chdir("/workspaces/KIIT-school-of-Leadership")

# List of files that need header/footer removal
files_to_clean = [
    "home.html",
    "mba-iev.html",
    "kites.html",
    "sri.html",
    "ecosystem-partners.html",
    "about-vice-chancellor.html",
    "about-pinaki-nandan.html",
    "people-board-of-studies.html",
    "people-regular-faculty.html",
    "people-professors-of-practice.html",
    "case-research-centre.html",
    "pace.html",
    "mba-iev-admissions.html",
    "index.html"
]

for filename in files_to_clean:
    if not os.path.exists(filename):
        print(f"File {filename} not found")
        continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_len = len(content)
    
    # Remove hardcoded header (from <!-- Top Bar --> to closing </nav>)
    content = re.sub(
        r'\n    <!-- Top Bar -->.*?</nav>\n',
        '\n',
        content,
        flags=re.DOTALL,
        count=1
    )
    
    # Remove hardcoded footer (from <!-- FOOTER --> or <!-- Footer --> to closing </footer>)
    content = re.sub(
        r'\n    <!-- (?:FOOTER|Footer).*?</footer>\n',
        '\n',
        content,
        flags=re.DOTALL,
        count=1
    )
    
    new_len = len(content)
    bytes_removed = original_len - new_len
    
    if bytes_removed > 0:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ {filename}: removed {bytes_removed} bytes")
    else:
        print(f"  {filename}: no changes needed")

print("\nDone!")
