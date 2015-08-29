var gulp = require('gulp'),
    $    = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'del', 'main-bower-files']
    }),
    wiredep = require('wiredep').stream;

// not using wiredep, but destination folder here is probably ok
// since you'd want to get the dependencies listed correctly and *then*
// compile with Jade (I think wiredep does its thing first).

gulp.task('wiredep', function() {
  gulp.src('./src/_partials/_layout.jade')
    .pipe(wiredep())
    .pipe(gulp.dest('./src/_partials'));
})

gulp.task('clean', function (done) {
 // note that what's below isn't gulp.~~~; del isn't a gulp module
 // and can be used outside of the gulp context.
 $.del('public', done);
});

gulp.task('jade:dev', function () {
  gulp
    // no _* (partials)
    .src(['src/**/*.jade', '!src/**/_*.jade'])
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('./public'))
    .pipe($.connect.reload());
});

gulp.task('jade:prod', function () {
  gulp
    // no _* (partials)
    .src(['src/**/*.jade', '!src/**/_*.jade'])
    .pipe($.jade())
    .pipe(gulp.dest('./public'))
});

gulp.task('sass:dev', function () {
  gulp
    .src('src/_styles/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.write())
    .pipe($.autoprefixer({
       browsers: ['> 1%'],
       cascade: true
     }))
    .pipe(gulp.dest('./public/css'))
    .pipe($.connect.reload());
});

gulp.task('sass:prod', function () {
  gulp
    .src('src/_styles/main.scss')
    .pipe($.sass({
        outputStyle: 'compressed'
      })
      .on('error', $.sass.logError)
    )
   .pipe($.autoprefixer({
     browsers: ['> 1%'],
     cascade: true
   }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('babel:dev', function () {
  gulp
    .src('src/js/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      sourceMaps: 'inline'
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
    .pipe($.connect.reload());
})

gulp.task('babel:prod', function () {
  // can uglify here but will need to
  // change Angular code to deal w/that.
  gulp
    .src('src/js/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('./public/js'));
})

gulp.task('bower', function() {
  gulp
    .src($.mainBowerFiles('**/*.js'))
    .pipe($.concat('build.js'))
    .pipe(gulp.dest('./public/lib'));
  gulp
    .src('bower_components/**/*.css')
    .pipe($.concat('build.css'))
    .pipe($.cssmin())
    .pipe(gulp.dest('./public/lib'));
});

gulp.task('copy', function() {
  gulp.src(['src/img/**'])
    .pipe(gulp.dest('public/img'));
  gulp.src(['src/favicon.png', 'src/CNAME'])
    .pipe(gulp.dest('public'));
});

gulp.task('build:prod', ['clean'], function () {
  gulp.start(['jade:prod', 'sass:prod', 'babel:prod', 'bower', 'copy']);
});

gulp.task('build:dev', ['clean'], function () {
  gulp.start(['jade:dev', 'sass:dev', 'babel:dev', 'bower', 'copy']);
});

var random_port = randomPort();
var livereload_port = randomPort();

gulp.task('connect', function() {
  $.connect.server({
    port: random_port,
    root: './public',
    livereload: {port: livereload_port}
  });
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.jade'], ['jade:dev'])
  gulp.watch(['src/**/*.scss'], ['sass:dev'])
  gulp.watch(['src/**/*.js'], ['babel:dev'])
});

gulp.task('open:dev', ['build:dev', 'connect', 'watch'], function() {
  gulp.src('').pipe($.open({uri:'http://localhost:' + random_port}));
});

gulp.task('open:prod', ['build:prod', 'connect', 'watch'], function() {
  gulp.src('').pipe($.open({uri:'http://localhost:' + random_port}));
});

gulp.task('default', ['open:dev']);

gulp.task('deploy', function(done) {
  return gulp.src('./public/**/**')
    .pipe($.ghPages({branch: "master"}));
});

function randomPort() {
  return Math.floor(Math.random() * 65535);
}
