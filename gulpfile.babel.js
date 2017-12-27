'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';

import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import Cache from 'gulp-file-cache';
let cache = new Cache();

import del from 'del';
import nodemon from 'gulp-nodemon'
import webpack from 'webpack-stream'
import webpackConfig from './webpack.config.js';
import browserSync from 'browser-sync';

// 소스/빌드 디렉토리를 담은 객체
const DIR = {
    SRC: 'src',
    DEST: 'dist'
};

const SRC = {
    JS: DIR.SRC + '/js/*.js',
    CSS: DIR.SRC + '/css/*.css',
    HTML: 'views/*.ejs',
    IMAGES: DIR.SRC + '/images/*',
    SERVER: 'server/**/*.js'
};

const DEST = {
    JS: DIR.DEST + '/js',
    CSS: DIR.DEST + '/css',
    HTML: DIR.DEST + '/',
    IMAGES: DIR.DEST + '/images',
    SERVER: 'app'
};

gulp.task('default', () => {
    return gutil.log('Gulp is running');
});

// # clean
gulp.task('clean', () => {
    return del.sync([DIR.DEST]);
});

// Server-side Javascript Task
gulp.task('babel', () => {
    return gulp.src(SRC.SERVER)
           .pipe(cache.filter())
           .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
           .pipe(babel({
              presets: ['es2015']
           }))
           .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
           .pipe(cache.cache())
           .pipe(gulp.dest(DEST.SERVER));
});

gulp.task('webpack', () => {
    return gulp.src('src/js/main.js')
           .pipe(webpack(webpackConfig))
           .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
           .pipe(gulp.dest('dist/js'));
});

// # minify css
gulp.task('css', () => {
    return gulp.src(SRC.CSS)
           .pipe(cleanCSS({compatibility: 'ie9'}))
           .pipe(gulp.dest(DEST.CSS));
});

// # minify html
gulp.task('html', () => {
    return gulp.src(SRC.HTML)
          .pipe(htmlmin({collapseWhitespace: true}))
          .pipe(gulp.dest(DEST.HTML))
});

// # compress images
gulp.task('images', () => {
    return gulp.src(SRC.IMAGES)
           .pipe(imagemin())
           .pipe(gulp.dest(DEST.IMAGES));
});

gulp.task('watch', () => {
    let watcher = {
        webpack: gulp.watch(SRC.JS, ['webpack']),
        css: gulp.watch(SRC.CSS, ['css']),
        html: gulp.watch(SRC.HTML, ['html']),
        images: gulp.watch(SRC.IMAGES, ['images']),
        babel: gulp.watch(SRC.SERVER, ['babel'])
    };

    let notify = (event) => {
        gutil.log('File', gutil.colors.yellow(event.path), 'was', gutil.colors.magenta(event.type));
    };

    for(let key in watcher) {
        watcher[key].on('change', notify);
    }
});

// restart server when detecting server-side is changed
gulp.task('start', ['babel'], () => {
    return nodemon({
        script: 'bin/www',
        watch: DEST.SERVER
    });
});

gulp.task('browser-sync', () => {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["dist/**/*.*"],
        port: 3100
    })
});

gulp.task('default', ['clean', 'webpack', 'css', 'html', 'images',
                      'watch', 'start', 'browser-sync'], () => {
    gutil.log('Gulp is running');
});
