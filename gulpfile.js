const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const jscs = require('gulp-jscs');
const chalk = require('chalk');

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(jsFiles)
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
        .pipe(jscs({configPath: './.jscsrc'}))
        .pipe(jscs.reporter());

});

gulp.task('inject', () => {
    const wiredep = require('wiredep').stream;
    const inject = require('gulp-inject');

    const injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});

    const injectOptions = {
        ignorePath: '/public'
    };

    const options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['lint', 'inject'], () => {

    const options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };

    return nodemon(options).on('restart', ['lint'], (ev) => {
        console.log(chalk.blueBright.underline('Server-Restarting...'));
    });
});