import re

with open('index.html', 'r') as f:
    content = f.read()

replacements = {
    r'<i class="fa-solid fa-truck-fast".*?</i>': '<i class="ph-light ph-truck"></i>',
    r'<i class="fa-solid fa-shield-halved".*?</i>': '<i class="ph-light ph-shield-check"></i>',
    r'<i class="fa-solid fa-certificate".*?</i>': '<i class="ph-light ph-seal-check"></i>',
    r'<i class="fa-solid fa-laptop cat-icon".*?</i>': '<i class="ph-light ph-laptop cat-icon"></i>',
    r'<i class="fa-solid fa-gamepad cat-icon".*?</i>': '<i class="ph-light ph-game-controller cat-icon"></i>',
    r'<i class="fa-solid fa-desktop cat-icon".*?</i>': '<i class="ph-light ph-desktop cat-icon"></i>',
    r'<i class="fa-solid fa-microchip cat-icon".*?</i>': '<i class="ph-light ph-cpu cat-icon"></i>',
    r'<i class="fa-solid fa-server cat-icon".*?</i>': '<i class="ph-light ph-cpu cat-icon"></i>',
    r'<i class="fa-solid fa-memory cat-icon".*?</i>': '<i class="ph-light ph-memory cat-icon"></i>',
    r'<i class="fa-solid fa-hard-drive cat-icon".*?</i>': '<i class="ph-light ph-hard-drive cat-icon"></i>',
    r'<i class="fa-solid fa-tv cat-icon".*?</i>': '<i class="ph-light ph-monitor cat-icon"></i>',
    r'<i class="fa-solid fa-headphones cat-icon".*?</i>': '<i class="ph-light ph-headphones cat-icon"></i>',
    r'<i class="fa-solid fa-fan cat-icon".*?</i>': '<i class="ph-light ph-fan cat-icon"></i>',
    r'<i class="fa-solid fa-gamepad".*?</i>': '<i class="ph-light ph-game-controller"></i>',
    r'<i class="fa-solid fa-desktop".*?</i>': '<i class="ph-light ph-desktop"></i>',
    r'<i class="fa-solid fa-microchip".*?</i>': '<i class="ph-light ph-cpu"></i>',
    r'<i class="fa-solid fa-tv".*?</i>': '<i class="ph-light ph-monitor"></i>',
    r'<i class="fa-solid fa-headphones".*?</i>': '<i class="ph-light ph-headphones"></i>',
    r'<i class="fa-solid fa-laptop".*?</i>': '<i class="ph-light ph-laptop"></i>',
}

for old, new_icon in replacements.items():
    content = re.sub(old, new_icon, content)

with open('index.html', 'w') as f:
    f.write(content)

print("Icons replaced")
