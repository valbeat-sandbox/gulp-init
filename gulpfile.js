var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');


// htmlファイルをコピーする
gulp.task('html', function() {
  // 操作対象となるファイルを指定
  return gulp.src('./src/index.html')
      // distフォルダにdest
      .pipe(gulp.dest('./dist'));
});

// // 第2引数に先に実行したいタスクを指定
// gulp.task('msg', ['html'], function() {
//   console.log('html copy done!');
// });

// imagemin (画像の最適化を行う)
gulp.task('img', function() {
  gulp.src('./src/img/*.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/img'));
});

// coffeeスクリプトをコンパイルして結合して圧縮する
gulp.task('js', function() {
  gulp.src('./src/coffee/*.coffee')
      .pipe(coffee())
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dest/js'));
});

// サーバーの立ち上げ
gulp.task('serve', function(){
  connect.server();
});


gulp.task('default',['html','img','js','serve']);
