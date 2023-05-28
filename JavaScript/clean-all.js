// Run a command in all subdirectories that contain a package.json file
// except node_modules and .git directories.
// Usage: node clean-all.js

import { execSync } from 'child_process';
import fs from 'node:fs';
import fs, { readdirSync, statSync } from 'node:fs';
import { readFileSync } from 'node:fs';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const startDir = process.cwd();
const command = 'npm run clean';
const dirs = fs.readdirSync(__dirname).filter((file) => {
    return fs.statSync(path.join(__dirname, file)).isDirectory() &&
        file !== 'node_modules' &&
        file !== '.git';
}
);
