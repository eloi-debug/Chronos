"""Install every Chronos v2.5 batch zip in order, run the wiring scripts, then run all tests.

Usage (from the repo root, with the downloaded zips in one folder):
    python install_all.py path/to/folder/with/zips
Safe to run more than once. It does NOT run git; review `git status` afterwards.
"""
import pathlib, subprocess, sys, zipfile

ORDER = [
    ("chronos-v2.5-batch1.zip", None),
    ("chronos-v2.5-batch2.zip", "apply_batch2.py"),
    ("chronos-v2.5-batch3a.zip", "apply_batch3a.py"),
    ("chronos-v2.5-batch3b1.zip", "apply_batch3b1.py"),
    ("chronos-v2.5-batch3b2.zip", "apply_batch3b2.py"),
    ("chronos-v2.5-batch4a.zip", "apply_batch4a.py"),
    ("chronos-v2.5-batch4b.zip", "apply_batch4b.py"),
    ("chronos-v2.5-batch4c.zip", "apply_batch4c.py"),
    ("chronos-v2.5-batch4d.zip", "apply_batch4d.py"),
    ("chronos-v2.5-batch4e-final.zip", "apply_batch4e.py"),
    ("chronos-v2.5-batch5-usa-canada-menu.zip", "apply_batch5.py"),
    ("chronos-v2.5-batch6-bible-places.zip", "apply_batch6.py"),
]

def main():
    src = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '.')
    root = pathlib.Path('.')
    if not (root / 'index.html').exists():
        sys.exit('Run this from the repo root (the folder that contains index.html).')
    missing = [z for z, _ in ORDER if not (src / z).exists()]
    if missing:
        sys.exit('Missing zips in %s:\n  %s' % (src, '\n  '.join(missing)))
    for zname, apply in ORDER:
        with zipfile.ZipFile(src / zname) as z:
            z.extractall(root)
        print('extracted', zname)
        if apply:
            r = subprocess.run([sys.executable, apply], capture_output=True, text=True)
            print('  ', (r.stdout or r.stderr).strip())
            if r.returncode:
                sys.exit('Wiring script failed: ' + apply)
    tests = ['test/test.js', 'test/smoke.js'] + sorted(str(p) for p in pathlib.Path('test').glob('test-*.js'))
    failed = []
    for t in tests:
        r = subprocess.run(['node', t], capture_output=True, text=True)
        status = 'ok ' if r.returncode == 0 else 'FAIL'
        last = (r.stdout.strip().splitlines() or [''])[-1]
        print(status, t, '-', last if r.returncode == 0 else (r.stderr.strip().splitlines() or ['?'])[0])
        if r.returncode:
            failed.append(t)
    print('\nAll tests passed.' if not failed else '\nFailing tests: ' + ', '.join(failed))
    sys.exit(1 if failed else 0)

if __name__ == '__main__':
    main()
