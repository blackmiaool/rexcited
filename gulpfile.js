const gulp = require('gulp');

const path = require('path');
const livereload = require('gulp-livereload');

const cached = require('gulp-cached');
const gutil = require('gulp-util');
const rollup = require('rollup').rollup;
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
let distFolder = 'dist';

const webpackStream = require('webpack-stream');
const webpack = require('webpack');

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



gulp.task('test', () => {
    return gulp.src("./index.jsx")
        .pipe(webpackStream({
            module: {
                loaders: [{
                    test: /\.jsx$/,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                          'es2015', 'react'],
                        plugins: []
                    },
                }, {
                    test: /\.json$/,
                    loader: "json-loader"
                }]
            },
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'index.bundle.js'
            },
            plugins: [
                    new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
                }),
            ],
        }), webpack)
        .pipe(gulp.dest("./dist"))
});
gulp.task('reload', () => {
    return gulp.src('')
        .pipe(livereload());
});

livereload.listen();


gulp.watch('src/react/*', ['react']);
gulp.watch('src/react-dom/*', ['react-dom']);
gulp.watch('index.jsx', ['test'])
gulp.watch('src/*.html', ['reload']);