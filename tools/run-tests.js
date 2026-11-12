// Runs every test: test/test.js, test/smoke.js and all test/test-*.js. Usage: node tools/run-tests.js
const { spawnSync } = require('child_process'), fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'test');
const files = ['test.js', 'smoke.js'].filter(f => fs.existsSync(path.join(dir, f)))
  .concat(fs.readdirSync(dir).filter(f => /^test-.*\.js$/.test(f)).sort());
let failed = 0;
for (const f of files) {
  const r = spawnSync(process.execPath, [path.join(dir, f)], { encoding: 'utf8' });
  const lines = (r.status === 0 ? r.stdout : (r.stderr || r.stdout)).trim().split('\n');
  const line = r.status === 0 ? lines[lines.length - 1] : (lines.find(l => /Error|FAIL/.test(l)) || lines[0]);
  console.log((r.status === 0 ? 'ok   ' : 'FAIL ') + f + ' - ' + line);
  if (r.status !== 0) failed++;
}
console.log(failed ? '\n' + failed + ' test file(s) failed.' : '\nAll ' + files.length + ' test files passed.');
process.exit(failed ? 1 : 0);
