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
const nodeResolve = require('rollup-plugin-node-resolve');
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
            globals: {
                React: 'React',
            },
            format: "umd",
            moduleName: "ReactDOM",
            context: "window",
            treeshake: false,
            dest: 'dist/react-dom-pre.js'
        });
    });
});

gulp.task('react-pre', function () {

    return rollup({
        entry: 'src/react/react.js',
        //        plugins: [resolve(), commonjs()]
    }).then(function (bundle) {
        return bundle.write({
            format: "umd",
            moduleName: "React",
            context: "window",
            treeshake: false,
            dest: 'dist/react-pre.js'
        });
    });

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

gulp.task('test-pre', function () {
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


gulp.task('test', ['test-pre'], () => {
    return rollup({
        entry: 'dist/test/helloworld/index.js',
        plugins: [
            nodeResolve({
                jsnext: true,
                main: true
            }),
                commonjs({
                // non-CommonJS modules will be ignored, but you can also
                // specifically include/exclude files
                include: 'node_modules/**', // Default: undefined

                ignoreGlobal: false, // Default: false
                // if false then skip sourceMap generation for CommonJS modules
                sourceMap: false, // Default: true

            })
        ]
    }).then(function (bundle) {
        return bundle.write({
            format: "umd",
            moduleName: "index",
            context: "window",
            //            treeshake: false,
            dest: './dist/test/helloworld/index2.js'
        });
    });
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