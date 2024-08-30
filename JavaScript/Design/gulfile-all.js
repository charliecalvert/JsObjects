// gulpfile.js
const gulp = require('gulp');
const { exec } = require('child_process');

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
    gulp.task(`ncu-${dir}`, (cb) => {
        exec('ncu', { cwd: dir }, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error in ${dir}:`, stderr);
                cb(err);
            } else {
                console.log(`Output from ${dir}:`, stdout);
                cb();
            }
        });
    });
});

gulp.task('ncu-all', gulp.series(directories.map(dir => `ncu-${dir}`)));