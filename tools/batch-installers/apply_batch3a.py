"""Wires Batch 3A into an existing Chronos checkout. Run from the repo root:  python apply_batch3a.py
Idempotent. Adds script tags to index.html after the last sources file and after the last tour file."""
import re, sys, pathlib

p = pathlib.Path('index.html')
html = p.read_text(encoding='utf-8')
m = re.search(r'\?v=([0-9.]+)', html)
ver = m.group(1) if m else '2.5'

def last_match(pattern):
    ms = list(re.finditer(pattern, html))
    return ms[-1] if ms else None

def insert_after(match, text):
    global html
    html = html[:match.end()] + '\n' + text + html[match.end():]

if 'sources-batch3a.js' not in html:
    mm = last_match(r'<script src="data/sources(?:-batch\w+)?\.js[^"]*"></script>')
    if not mm: sys.exit('No sources script tag found in index.html')
    insert_after(mm, '<script src="data/sources-batch3a.js?v=%s"></script>' % ver)

tags = ''.join('<script src="data/tours/%s.js?v=%s"></script>\n' % (t, ver) for t in ['egypt', 'macedonia', 'china', 'mongol', 'ottoman'] if 'data/tours/%s.js' % t not in html).rstrip('\n')
if tags:
    mm = last_match(r'<script src="data/tours/(?!overview)\w[\w-]*\.js[^"]*"></script>')
    if not mm: sys.exit('No tour script tags found in index.html')
    insert_after(mm, tags)

p.write_text(html, encoding='utf-8')
print('Batch 3A wiring applied. Now run: node test/test-batch3a.js')
