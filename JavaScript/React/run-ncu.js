const { run } = require('npm-check-updates');

function runNcu() {
    run({
        // Pass any cli option
        // packageFile: './package.json',
        upgrade: true,
        doctor: true,
        // Defaults:
        // jsonUpgraded: true,
        // silent: true,
    }).then((upgraded) => {
        console.log(upgraded);
    });
}

runNcu();
