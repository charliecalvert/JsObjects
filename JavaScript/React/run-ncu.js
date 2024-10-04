const { run } = require('npm-check-updates');

// Function to run ncu
// It has doctor turned on which means it will run jest tests
// Right now the tests fail. Need to fix them, but right now I'm not
// concerned with that.
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
