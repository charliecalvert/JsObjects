// gulpfile.js
const gulp = require('gulp');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const directories = [
    'BridgeSailor',
    'DecorateSailor',
    'ElfRoutes01',
    'ElfRoutes02',
    'FactoryInterface',
    'FactorySimple01',
    'GridCanonical',
    'GridCleanSite',
    'GridExpress',
    'GridExpressFetch',
    'GridTwelveCols',
    'IBitDay2016',
    'JadeMixinComplete',
    'JadeMixinSimple',
    'JsonFromServer',
    'JsonFromServer02',
    'Knockout01',
    'MaterialComponents',
    'OldAngular',
    'PubSubTopic01',
    'PubSubTopic02',
    'PubSubTopic03',
    'PubSubTopic04',
    'Ractive',
    'RequireBoat',
    'RequireCrafty',
    'RequireJs01',
    'SimpleQueue',
    'Singleton'
];

directories.forEach(dir => {
    gulp.task(`npm-install-${dir}`, (cb) => {
        const packageJsonPath = path.join(dir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            exec('npm i', { cwd: dir }, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Error in ${dir}:`, stderr);
                    cb(err);
                } else {
                    console.log(`Output from ${dir}:`, stdout);
                    cb();
                }
            });
        } else {
            console.log(`No package.json found in ${dir}`);
            cb();
        }
    });
});

gulp.task('npm-install-all', gulp.series(directories.map(dir => `npm-install-${dir}`)));
exports.default = gulp.series('npm-install-all');