var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require("browser-sync").create();


gulp.task('sass', function(){
    return sass('sass/main.scss',
               {style: 'extended', sourcemap:true})
    .on('error',sass.logError)
    .pipe(sourcemaps.write())
.pipe(gulp.dest('./css'))
.pipe(browserSync.stream());
});
gulp.task('watch',function(){

  browserSync.init({
      server: "./"
  });
  gulp.watch('sass/*.scss',['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
});
