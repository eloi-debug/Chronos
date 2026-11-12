"""Wires Batch 3B-1 into a Chronos checkout. Run from the repo root:  python apply_batch3b1.py
Idempotent. Adds script tags to index.html and removes the finished items from data/planned.js."""
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

if 'sources-batch3b1.js' not in html:
    mm = last_match(r'<script src="data/sources(?:-batch\w+)?\.js[^"]*"></script>')
    if not mm: sys.exit('No sources script tag found in index.html')
    insert_after(mm, '<script src="data/sources-batch3b1.js?v=%s"></script>' % ver)

tags = '\n'.join('<script src="data/tours/%s.js?v=%s"></script>' % (t, ver) for t in ['christianity', 'islam', 'hindu', 'daoism'] if 'data/tours/%s.js' % t not in html)
if tags:
    mm = last_match(r'<script src="data/tours/(?!overview)\w[\w-]*\.js[^"]*"></script>')
    if not mm: sys.exit('No tour script tags found in index.html')
    insert_after(mm, tags)
p.write_text(html, encoding='utf-8')

pl = pathlib.Path('data/planned.js')
if pl.exists():
    keep = [l for l in pl.read_text(encoding='utf-8').splitlines(keepends=True)
            if not re.search(r'Christianity|"Islam"|Hindu traditions|"Daoism"', l)]
    pl.write_text(''.join(keep), encoding='utf-8')
print('Batch 3B-1 wiring applied. Now run: node test/test-batch3b1.js')
