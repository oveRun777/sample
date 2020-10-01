import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import imagemin from 'gulp-imagemin';

//sassのタスク設定
gulp.task('sass', () => {
  return gulp
    .src('./working_dir/scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./public_dir/css'));
});
gulp.task('file', () => {
  return gulp
    .src('./working_dir/**/*.html')
    .pipe(gulp.dest('./public_dir/'));
});
gulp.task('babel', () => {
  return gulp
    .src('./working_dir/js/*.js')
    .pipe(babel({
      "presets": ["@babel/preset-env"]
    }))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('./public_dir/js'));
});

gulp.task('imagemin', function() {
  gulp.src('./working_dir/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public_dir/images/'));
});

//browser-syncのタスク設定
gulp.task('serve', done => {
  browserSync.init({
    server: {
      baseDir: './public_dir',
      index: 'index.html'
    }
  });
  done();
});

//ファイルの監視タスク設定
gulp.task('watch', () => {
  const browserReload = done => {
    browserSync.reload();
    done();
  };
  gulp.watch('./public_dir/**/*', browserReload);
  gulp.watch('./working_dir/**/*', gulp.series('file'));
  gulp.watch('./working_dir/scss/*.scss', gulp.series('sass'));
  gulp.watch('./working_dir/images/*', gulp.series('imagemin'));
  // gulp.watch('./working_dir/js/*.js', gulp.series('lint'));
  gulp.watch('./working_dir/js/*.js', gulp.series('babel'));
});

gulp.task('default', gulp.series('serve', 'watch'));