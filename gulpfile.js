"use strict"

var gulp = require("gulp"); // Сообственно Gulp JS
var pug = require("gulp-pug"); // Плагин для Pug
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');
 

gulp.task("pug", function() {
  return gulp.src("app/pug/*.pug")
    .pipe(plugins.plumber())
    .pipe(plugins.pug({
      pretty: true
    }))
    .pipe(gulp.dest("dist/html"));
});


gulp.task("stylus", function () {
  return gulp.src("app/stylus/style.styl")
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest("dist/css"));
});



gulp.task("css", function() {
  return gulp.src("app/stylus/style.styl")
  .pipe(plugins.stylus())
  .pipe(plugins.autoprefixer())
  .pipe(plugins.cssnano())
  .pipe(gulp.dest("build/css"));
});

gulp.task("html", function() {
  return gulp.src("app/pug/*.pug")
  .pipe(plugins.pug())
  .pipe(plugins.htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("build"));
});

gulp.task("build", [
  "css",
  "html",
  ], function () {
});

gulp.task("copy", function() {
return gulp.src([
"dist/fonts/**/*.{woff,woff2}",
"dist/img/**",
"dist/js/**",
"dist/css/**",
"dist/*.html"
], {
base: "."})
.pipe(gulp.dest("build"));

});
