// gulpfile.js
const gulp = require('gulp');
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
    gulp.task(`copy-temp-${dir}`, (cb) => {
        const tempJsonPath = path.join(dir, 'temp.json');
        const packageJsonPath = path.join(dir, 'package.json');
        if (fs.existsSync(tempJsonPath)) {
            fs.copyFile(tempJsonPath, packageJsonPath, (err) => {
                if (err) {
                    console.error(`Error copying temp.json to package.json in ${dir}:`, err);
                    cb(err);
                } else {
                    console.log(`Copied temp.json to package.json in ${dir}`);
                    cb();
                }
            });
        } else {
            console.log(`No temp.json found in ${dir}`);
            cb();
        }
    });
});

gulp.task('copy-all', gulp.series(directories.map(dir => `copy-temp-${dir}`)));

gulp.task('default', gulp.series('copy-all'));
