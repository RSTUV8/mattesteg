const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

process.chdir(__dirname);
for (const file of ['dist/app.js', 'dist/engine.js', 'checks.cjs', 'preview.cjs', 'ci.cjs']) {
  execFileSync(process.execPath, ['--check', file], { stdio: 'inherit' });
}
execFileSync(process.execPath, ['checks.cjs'], { stdio: 'inherit' });

const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
assert.equal(config.framework, null);
assert.equal(config.outputDirectory, 'dist');
assert.equal(config.buildCommand, 'node ci.cjs');
const root = path.resolve(config.outputDirectory);
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert.match(html, /<html\s+lang="nb"/);
const references = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map(match => match[1])
  .filter(ref => !ref.startsWith('#') && !/^[a-z]+:/i.test(ref));
assert.ok(references.length > 0, 'Startside må referere til lokale ressurser');
for (const ref of references) {
  const file = path.resolve(root, ref.split(/[?#]/)[0]);
  assert.ok(file.startsWith(root + path.sep), `Ressurs utenfor dist: ${ref}`);
  assert.ok(fs.existsSync(file) && fs.statSync(file).isFile(), `Mangler ressurs: ${ref}`);
}
console.log('CI OK: JavaScript, oppgavegenerator, Vercel-oppsett og lokale ressurser.');
