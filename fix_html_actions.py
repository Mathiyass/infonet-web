import os
import re

html_files = []
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

# Regex to find:
# <div class="product-card-actions">
#   ... anything ...
# </div>
# <div class="product-img-wrapper">

pattern = re.compile(
    r'(<div class="product-card-actions">.*?</div>)\s*(<div class="product-img-wrapper">)',
    re.DOTALL
)

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace by putting the actions INSIDE the wrapper, right after the opening tag
    new_content = pattern.sub(r'\2\n                \1', content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed {file_path}")

print("Done")
