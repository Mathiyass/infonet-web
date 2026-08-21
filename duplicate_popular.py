import re

with open('index.html', 'r') as f:
    html = f.read()

popular_start = html.find('<h2>Popular Hardware &amp; Peripherals</h2>')
wrapper_start = html.find('<div class="swiper-wrapper">', popular_start) + len('<div class="swiper-wrapper">\n')
wrapper_end = html.find('</div>\n</div>\n    </section>', wrapper_start)

products_html = html[wrapper_start:wrapper_end]

new_html = html[:wrapper_end] + products_html + html[wrapper_end:]

with open('index.html', 'w') as f:
    f.write(new_html)

print("Products duplicated in Popular Hardware")
