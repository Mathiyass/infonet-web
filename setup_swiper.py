with open('index.html', 'r') as f:
    lines = f.readlines()

new_lines = []
in_grid = False
grid_depth = 0

for line in lines:
    if '<div class="product-grid">' in line:
        in_grid = True
        grid_depth = 1
        new_lines.append(line.replace('<div class="product-grid">', '<div class="swiper product-grid-swiper">\n<div class="swiper-wrapper">'))
        continue
    
    if in_grid:
        if '<div' in line:
            grid_depth += line.count('<div')
        if '</div' in line:
            grid_depth -= line.count('</div')
            
        if grid_depth == 0:
            in_grid = False
            # Close the swiper-wrapper before closing the swiper
            line = line.replace('</div>', '</div>\n</div>', 1)
        
        # Add swiper-slide to product cards
        if '<div class="product-card"' in line:
            line = line.replace('<div class="product-card"', '<div class="product-card swiper-slide"')
            
    new_lines.append(line)

with open('index.html', 'w') as f:
    f.writelines(new_lines)

print("Swiper HTML structure applied")
