const resolve = require('rollup-plugin-node-resolve');
const gulp = require('gulp');

const path = require('path');
const livereload = require('gulp-livereload');

const cached = require('gulp-cached');
const gutil = require('gulp-util');
const rollup = require('rollup').rollup;
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const commonjs = require('rollup-plugin-commonjs');

let distFolder = 'dist';



function get_babel_params() {
    return {
        compact: false,
        presets: [['es2015', {
            "modules": false
        }], 'react'],
        plugins: [],
        //        optional: ['runtime'],
    };
}


gulp.task('default', () => gulp.start(['react-dom', 'react', 'test']));


gulp.task('reload', () => {
    return gulp.src('')
        .pipe(livereload());
});



gulp.task('react-dom-pre', function () {
    return rollup({
        entry: 'src/react-dom/react-dom.js',
        //        plugins: [resolve(), commonjs()]
    }).then(function (bundle) {
        return bundle.write({
            format: "umd",
            moduleName: "ReactDOM",
            context: "window",
            treeshake: false,
            dest: 'dist/react-dom-pre.js'
        });
    });
});

gulp.task('react-pre', function () {
    setTimeout(function () {
        return rollup({
            entry: 'src/react/react.js',
            //        plugins: [resolve(), commonjs()]
        }).then(function (bundle) {
            return bundle.write({
                globals: {
                    jquery: 'jQuery',
                },
                format: "umd",
                moduleName: "React",
                context: "window",
                treeshake: false,
                dest: 'dist/react-pre.js'
            });
        });
    }, 200)

});


gulp.task('react-dom', ['react-dom-pre'], () => {
    const babel_pipe = babel(get_babel_params());
    babel_pipe.on('error', (ee) => {
        gutil.log(ee);
        babel_pipe.end();
    });
    return gulp.src("dist/react-dom-pre.js")
        .pipe(babel_pipe)
        .pipe(rename("react-dom.js"))
        .pipe(gulp.dest(distFolder))
        .pipe(livereload());
});

gulp.task('react', ['react-pre'], () => {
    const babel_pipe = babel(get_babel_params());
    babel_pipe.on('error', (ee) => {
        gutil.log(ee);
        babel_pipe.end();
    });
    return gulp.src("dist/react-pre.js")
        .pipe(babel_pipe)
        .pipe(rename("react.js"))
        .pipe(gulp.dest(distFolder))
        .pipe(livereload());
});
gulp.task('test', () => {
    const babel_pipe = babel(get_babel_params());
    babel_pipe.on('error', (ee) => {
        gutil.log(ee);
        babel_pipe.end();
    });
    return gulp.src("test/**/*", {
            base: '.'
        })
        .pipe(babel_pipe)
        .pipe(gulp.dest(distFolder))
        .pipe(livereload());
});
gulp.task('reload', () => {
    return gulp.src('')
        .pipe(livereload());
});

livereload.listen();


gulp.watch('src/react/*', ['react']);
gulp.watch('src/react-dom/*', ['react-dom']);
gulp.watch('test/**/*', ['test'])
gulp.watch('src/*.html', ['reload']);