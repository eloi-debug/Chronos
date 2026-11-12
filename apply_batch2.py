"""Applies Batch 2 wiring to an existing Chronos checkout (run from the repo root):  python apply_batch2.py
Idempotent: safe to run twice. Edits index.html (adds script tags) and data/planned.js (removes finished tours)."""
import re, sys, pathlib

root = pathlib.Path('.')
idx = root / 'index.html'
html = idx.read_text(encoding='utf-8')

def add_after(html, anchor_pattern, new_tag):
    if new_tag in html:
        return html
    m = re.search(anchor_pattern, html)
    if not m:
        sys.exit('Could not find anchor for ' + new_tag + ' in index.html')
    return html[:m.end()] + '\n' + new_tag + html[m.end():]

v = re.search(r'\?v=([0-9.]+)', html)
ver = v.group(1) if v else '2.5'
html = add_after(html, r'<script src="data/sources(?:-batch1)?\.js[^"]*"></script>', '<script src="data/sources-batch2.js?v=%s"></script>' % ver)
html = add_after(html, r'<script src="data/tours/greece\.js[^"]*"></script>', '<script src="data/tours/weimar.js?v=%s"></script>\n<script src="data/tours/british-empire.js?v=%s"></script>' % (ver, ver))
# sources-batch2 must come after sources-batch1 if both exist
if 'sources-batch1.js' in html and html.index('sources-batch2.js') < html.index('sources-batch1.js'):
    html = html.replace('<script src="data/sources-batch2.js?v=%s"></script>\n' % ver, '')
    html = add_after(html, r'<script src="data/sources-batch1\.js[^"]*"></script>', '<script src="data/sources-batch2.js?v=%s"></script>' % ver)
idx.write_text(html, encoding='utf-8')

pl = root / 'data' / 'planned.js'
if pl.exists():
    lines = pl.read_text(encoding='utf-8').splitlines(keepends=True)
    keep = [l for l in lines if not re.search(r'Weimar Republic|The British Empire', l)]
    pl.write_text(''.join(keep), encoding='utf-8')
print('Batch 2 wiring applied. Now run: node test/test-batch2.js')
