// Run a command in all subdirectories that contain a package.json file
// except node_modules and .git directories.
// Usage: node clean-all.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

