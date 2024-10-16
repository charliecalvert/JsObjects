// const { exec } = require('child_process');
const { log } = require('console');
const { cwd } = require('process');
const { run } = require('npm-check-updates');

log("cwd", cwd()); // Current working directory

function runNcu() {
    // Run npm-check-updates
    run({
        packageFile: './package.json',
        upgrade: true,
        silent: false,
        jsonUpgraded: false,
    });
}
module.exports = { runNcu };