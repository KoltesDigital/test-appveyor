const fs = require('fs');
const makeDir = require('make-dir');
const path = require('path');

makeDir('dist')
.then(() => {
fs.writeFileSync('dist/foo.txt', 'foo');
fs.writeFileSync('dist/bar.txt', 'bar');
});
