// gulpfile.js
const gulp = require('gulp');
const { exec } = require('child_process');

gulp.task('build-simple-state', (cb) => {
    exec('npm run build', { cwd: 'simple-state' }, cb);
});

gulp.task('build-react-simple', (cb) => {
    exec('npm run build', { cwd: 'react-simple' }, cb);
});

// gulp.task('build-all', gulp.parallel('build-simple-state', 'build-react-simple'));

gulp.task('BuildElfExpressServer', (cb) => {
    exec('npm run build', { cwd: 'ElfExpressServer' }, cb);
});

gulp.task('MaterialBrowserify', (cb) => {
    exec('npm run build', { cwd: 'MaterialBrowserify' }, cb);
});

gulp.task('ReactEs6', (cb) => {
    exec('npm run build', { cwd: 'ReactEs6' }, cb);
});

gulp.task('ReactFetchTests', (cb) => {
    exec('npm run build', { cwd: 'ReactFetchTests' }, cb);
});

gulp.task('ReactRouterDomBasics', (cb) => {
    exec('npm run build', { cwd: 'ReactRouterDomBasics' }, cb);
});

gulp.task('ReactRouterDomCss', (cb) => {
    exec('npm run build', { cwd: 'ReactRouterDomCss' }, cb);
});

gulp.task('ReactRouterDomFetch', (cb) => {
    exec('npm run build', { cwd: 'ReactRouterDomFetch' }, cb);
});

gulp.task('ReactRouterDomNavigate', (cb) => {
    exec('npm run build', { cwd: 'ReactRouterDomNavigate' }, cb);
});

gulp.task('RestBoiler', (cb) => {
    exec('npm run build', { cwd: 'RestBoiler' }, cb);
});

gulp.task('RestExpress', (cb) => {
    exec('npm run build', { cwd: 'RestExpress' }, cb);
});

gulp.task('drawer-menu', (cb) => {
    exec('npm run build', { cwd: 'drawer-menu' }, cb);
});

gulp.task('dynamic-load', (cb) => {
    exec('npm run build', { cwd: 'dynamic-load' }, cb);
});

gulp.task('gatsby-site', (cb) => {
    exec('npm run build', { cwd: 'gatsby-site' }, cb);
});

gulp.task('higher-order-component', (cb) => {
    exec('npm run build', { cwd: 'higher-order-component' }, cb);
});

gulp.task('material-button-components', (cb) => {
    exec('npm run build', { cwd: 'material-button-components' }, cb);
});

gulp.task('node_modules', (cb) => {
    exec('npm run build', { cwd: 'node_modules' }, cb);
});

gulp.task('react-app-create', (cb) => {
    exec('npm run build', { cwd: 'react-app-create' }, cb);
});

gulp.task('react-webpack-simple', (cb) => {
    exec('npm run build', { cwd: 'react-webpack-simple' }, cb);
});

gulp.task('redux-simple', (cb) => {
    exec('npm run build', { cwd: 'redux-simple' }, cb);
});

gulp.task('simple-express-jest', (cb) => {
    exec('npm run build', { cwd: 'simple-express-jest' }, cb);
});

gulp.task('simple-inputs-bit-dev', (cb) => {
    exec('npm run build', { cwd: 'simple-inputs-bit-dev' }, cb);
});

gulp.task('simple-inputs', (cb) => {
    exec('npm run build', { cwd: 'simple-inputs' }, cb);
});

gulp.task('simple-radio-buttons', (cb) => {
    exec('npm run build', { cwd: 'simple-radio-buttons' }, cb);
});

gulp.task('style-guide-examples', (cb) => {
    exec('npm run build', { cwd: 'style-guide-examples' }, cb);
});

gulp.task('todo-redux', (cb) => {
    exec('npm run build', { cwd: 'todo-redux' }, cb);
});

/* ReactRouterDomCss
ReactRouterDomFetch
ReactRouterDomNavigate
RestBoiler
RestExpress
drawer-menu
dynamic-load
gatsby-site
higher-order-component
material-button-components
node_modules
react-app-create
react-simple
react-webpack-simple
redux-simple
simple-express-jest
simple-inputs-bit-dev
simple-inputs
simple-radio-buttons
simple-state
style-guide-examples
todo-redux */
