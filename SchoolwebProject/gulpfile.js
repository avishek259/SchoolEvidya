var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass','scripts','copyScriptLibs','copyHtmlFiles','copycssFiles','copyMainhtml','copyImages']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

var jsFiles = './www/js/**/*.js',jsDest = 'www/scripts';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.uglify.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('copyScriptLibs', function(){
  return gulp.src('./www/lib/**/*').pipe(gulp.dest('./www/scripts/lib/'));
});

gulp.task('copyHtmlFiles', function(){
  return gulp.src('./www/templates/**/*').pipe(gulp.dest('./www/scripts/templates'));
});

gulp.task('copycssFiles', function(){
	  return gulp.src('./www/css/**/*').pipe(gulp.dest('./www/scripts/css'));
});

gulp.task('copyMainhtml', function(){
	return gulp.src('./www/index2.html').pipe(gulp.dest('./www/scripts/'));	
});

gulp.task('copyImages', function(){
	return gulp.src('./www/img/**/*').pipe(gulp.dest('./www/scripts/img'));	
});
