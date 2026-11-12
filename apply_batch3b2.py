"""Wires Batch 3B-2 into a Chronos checkout. Run from the repo root:  python apply_batch3b2.py
Idempotent. Adds script tags to index.html, removes finished items from data/planned.js, hides the 'Planned' box when it is empty."""
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

if 'sources-batch3b2.js' not in html:
    mm = last_match(r'<script src="data/sources(?:-batch\w+)?\.js[^"]*"></script>')
    if not mm: sys.exit('No sources script tag found in index.html')
    insert_after(mm, '<script src="data/sources-batch3b2.js?v=%s"></script>' % ver)

names = ['troy', 'greek-roman-religion', 'mesopotamian-religion', 'mahabharata']
tags = '\n'.join('<script src="data/tours/%s.js?v=%s"></script>' % (t, ver) for t in names if 'data/tours/%s.js' % t not in html)
if tags:
    mm = last_match(r'<script src="data/tours/(?!overview)\w[\w-]*\.js[^"]*"></script>')
    if not mm: sys.exit('No tour script tags found in index.html')
    insert_after(mm, tags)

pl = pathlib.Path('data/planned.js')
empty = True
if pl.exists():
    keep = [l for l in pl.read_text(encoding='utf-8').splitlines(keepends=True)
            if not re.search(r'Troy|Greek and Roman religion|Mesopotamian religion|Mahabharata', l)]
    pl.write_text(''.join(keep), encoding='utf-8')
    empty = not any('title:' in l for l in keep)
if empty and '<details class="planned">' in html:
    html = html.replace('<details class="planned">', '<details class="planned" hidden>')
p.write_text(html, encoding='utf-8')
print('Batch 3B-2 wiring applied. Now run: node test/test-batch3b2.js')
