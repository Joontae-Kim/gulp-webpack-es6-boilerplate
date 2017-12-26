const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');
const cleanCSS = require('gulp-clean-css');

gulp.task('default', ['watch']);

// 기본 babel 태스크
gulp.task('babel', function() {
  return gulp.src('public/src/js/*.js')
    .pipe(babel({
      presets : ['env']
    }))
    .pipe(gulp.dest('public/assets/js/'))
})

// 기본 webpack 태스크
gulp.task('webpack', ['babel'], function() {
  return gulp.src('public/assets/js/*.js')
    .pipe(webpack({
      output : {
        path : "/public/assets/webpacked",
        filename : "app2.js"
      }
    }))
    .pipe(gulp.dest('public/assets/webpacked'))
})

// 자바스크립트 파일을 minify
gulp.task('uglify', function () {
	return gulp.src('public/assets/webpacked/app2.js') //src 폴더 아래의 모든 js 파일을
		.pipe(uglify()) //minify 해서
		.pipe(gulp.dest('public/min/js')); //dist 폴더에 저장
});

// CSS 파일 minify
gulp.task('minify-css', () => {
  return gulp.src('public/src/style/*.css')
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('public/min/css'));
});


//gulp를 실행하면 default 로 uglify task를 실행
gulp.task('default', ['uglify', 'minify-css']);

// 기본 watch 태스트
gulp.task('watch', function() {
  // gulp.watch('public/src/js/*.js', ['babel', 'webpack', 'uglify']);
  gulp.watch('public/src/style/*.css', ['minify-css']);
})
