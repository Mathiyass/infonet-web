import re

with open('index.html', 'r') as f:
    html = f.read()

# Replace the closing tag of the swiper wrappers to include the pagination div
# Currently it looks like:
# </div>
# </div>
#     </section>

# Let's target the exact structure:
html = html.replace('</div>\n</div>\n    </section>', '</div>\n    <div class="swiper-pagination" style="position: relative; margin-top: 30px;"></div>\n</div>\n    </section>')

with open('index.html', 'w') as f:
    f.write(html)

print("Pagination added to HTML")
