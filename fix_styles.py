import re

with open("styles.css", "r") as f:
    content = f.read()

# 1. Font families
content = content.replace("--font-heading: 'Montserrat', sans-serif;", "--font-heading: 'Poppins', sans-serif;")

# 2. Font sizes
html_pattern = r"(html\s*\{[^}]*)(scroll-behavior:\s*smooth;)([^}]*\})"
content = re.sub(html_pattern, r"\1\2\n    font-size: 105%;\3", content)

# 3. Font weights correctly
def weight_replacer(match):
    weight_str = match.group(1)
    if weight_str == "900":
        return "font-weight: 700;"
    elif weight_str == "800":
        return "font-weight: 600;"
    elif weight_str == "700":
        return "font-weight: 500;"
    elif weight_str == "600":
        return "font-weight: 500;"
    return match.group(0)

content = re.sub(r"font-weight:\s*(900|800|700|600);", weight_replacer, content)

# 4. Icon colors to gray
icon_selectors = [
    ".top-left i",
    ".header-call-pill i",
    ".action-icon-link:hover i",
    ".view-all-cat-item a:hover i",
    ".trust-item:hover i",
    ".spec-bullet i",
    ".checkout-card h3 i",
    ".branch-detail-row i",
    ".deals-title h2 i"
]

for selector in icon_selectors:
    escaped_selector = re.escape(selector)
    pattern = escaped_selector + r"\s*\{[^}]*\}"
    
    def replacer(match):
        block = match.group(0)
        # Replace colored vars with gray
        block = re.sub(r"color:\s*var\(--(accent-red|primary-green|primary-red)\)(?:\s*!important)?;", "color: #64748b;", block)
        return block

    content = re.sub(pattern, replacer, content)

with open("styles.css", "w") as f:
    f.write(content)

print("Styles updated.")
