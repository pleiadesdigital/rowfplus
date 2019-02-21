var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var browserSync = require("browser-sync").create();
var webpack = require('webpack');


/* FILE PATHS */
var DIST_PATH = 'public/css';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var SCSS_PATH = 'public/scss/**/*.scss';

// TASK Style SASS
gulp.task('styles', function(){
  return gulp
    .src(['public/scss/style.scss'])
    .pipe(plumber(function(err) {
      console.log('Styles task error!');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DIST_PATH))
    // .pipe(livereload());
});

// TASK Scripts JS
gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

// WATCH BrowserSync
gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "public"
    }
  });

  watch('./public/index.html', function() {
    browserSync.reload();
  });

  watch(SCSS_PATH, function() {
    gulp.start('cssInject');
  });

  watch(SCRIPTS_PATH, function() {
    gulp.start('scriptsRefresh');
  });

});

/* BrowserSync's CSS Inject */
gulp.task('cssInject', ['styles'], function() {
  return gulp.src(DIST_PATH)
    .pipe(browserSync.stream());
});

/* BrowserSync's SCRIPTS Refresh */
gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});

// Default
gulp.task('default', function () {
  console.log('Starting default task!');

})

