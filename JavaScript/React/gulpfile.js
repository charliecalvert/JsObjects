// gulpfile.js
const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('build-simple-state', (cb) => {
    exec('npm run build', { cwd: 'simple-state' }, cb);
});

gulp.task('build-react-simple', (cb) => {
    exec('npm run build', { cwd: 'react-simple' }, cb);
});

gulp.task('build-all', gulp.parallel('build-simple-state', 'build-react-simple'));
