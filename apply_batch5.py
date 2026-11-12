"""Wires Batch 5 (USA/Canada tours + tour menu UI) into a Chronos checkout.
Run from the repo root:  python apply_batch5.py      (idempotent)"""
import re, sys, pathlib

p = pathlib.Path('index.html')
html = p.read_text(encoding='utf-8')
m = re.search(r'\?v=([0-9.]+)', html)
ver = m.group(1) if m else '2.5'

def last_match(pattern):
    ms = list(re.finditer(pattern, html))
    return ms[-1] if ms else None

def insert_after(mm, text):
    global html
    html = html[:mm.end()] + '\n' + text + html[mm.end():]

# 1. stylesheet
if 'tourmenu.css' not in html:
    mm = last_match(r'<link rel="stylesheet" href="style\.css[^"]*">')
    if not mm: sys.exit('Could not find the style.css link in index.html')
    insert_after(mm, '<link rel="stylesheet" href="tourmenu.css?v=%s">' % ver)

# 2. sources + tours
if 'sources-batch5.js' not in html:
    mm = last_match(r'<script src="data/sources(?:-batch\w+)?\.js[^"]*"></script>')
    if not mm: sys.exit('No sources script tag found in index.html')
    insert_after(mm, '<script src="data/sources-batch5.js?v=%s"></script>' % ver)
names = ['indigenous-north-america', 'colonial-america-revolution', 'us-slavery-civil-war', 'us-expansion-removal',
         'us-twentieth-century', 'canada-new-france', 'canada-since-confederation']
tags = '\n'.join('<script src="data/tours/%s.js?v=%s"></script>' % (t, ver) for t in names if 'data/tours/%s.js' % t not in html)
if tags:
    mm = last_match(r'<script src="data/tours/(?!overview)\w[\w-]*\.js[^"]*"></script>')
    if not mm: sys.exit('No tour script tags found in index.html')
    insert_after(mm, tags)

# 3. menu data + logic before app.js, menu UI after app.js
app = re.search(r'<script src="js/app\.js[^"]*"></script>', html)
if not app: sys.exit('Could not find the app.js script tag in index.html')
pre = ''.join('<script src="%s?v=%s"></script>\n' % (f, ver) for f in ['data/tour-meta.js', 'js/tourindex.js'] if f not in html)
if pre:
    i = app.start(); html = html[:i] + pre + html[i:]
    app = re.search(r'<script src="js/app\.js[^"]*"></script>', html)
if 'js/tourmenu.js' not in html:
    insert_after(app, '<script src="js/tourmenu.js?v=%s"></script>' % ver)

p.write_text(html, encoding='utf-8')
print('Batch 5 wiring applied. Now run: node test/test-batch5.js && node test/test-tourindex.js && node test/test-tourmenu.js')
