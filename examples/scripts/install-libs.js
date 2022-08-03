const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../quick-examples/package.json');
const libPath = path.join(__dirname, '../../lib');

const json = JSON.parse(fs.readFileSync(packageJsonPath).toString());

fs.writeFileSync(packageJsonPath, JSON.stringify({
  ...json,
  'dependencies': {
    ...json.dependencies,
    '@quickly/react': libPath,
  }
}, undefined, 2));