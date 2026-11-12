"""Wires Batch 4D into a Chronos checkout. Run from the repo root:  python apply_batch4d.py   (idempotent)"""
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
if 'sources-batch4d.js' not in html:
    mm = last_match(r'<script src="data/sources(?:-batch\w+)?\.js[^"]*"></script>')
    if not mm: sys.exit('No sources script tag found in index.html')
    insert_after(mm, '<script src="data/sources-batch4d.js?v=%s"></script>' % ver)
names = ['indus-valley', 'mauryan-empire', 'vikings', 'cold-war', 'decolonisation', 'west-african-empires']
tags = '\n'.join('<script src="data/tours/%s.js?v=%s"></script>' % (t, ver) for t in names if 'data/tours/%s.js' % t not in html)
if tags:
    mm = last_match(r'<script src="data/tours/(?!overview)\w[\w-]*\.js[^"]*"></script>')
    if not mm: sys.exit('No tour script tags found in index.html')
    insert_after(mm, tags)
p.write_text(html, encoding='utf-8')
print('Batch 4D wiring applied. Now run: node test/test-batch4d.js')
