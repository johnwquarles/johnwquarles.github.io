// run gulp clean manually.
// I don't know. Bug?

var gulp = require('gulp'),
    $    = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'del', 'main-bower-files']
    }),
    wiredep = require('wiredep').stream;

// gulp.task('clean', function () {
//   // note that what's below isn't gulp.~~~; del isn't a gulp module
//   // and can be used outside of the gulp context.
//   $.del('./.');
// });

gulp.task('bower', function() {
  gulp
    .src($.mainBowerFiles('**/*.js'))
    .pipe($.concat('build.js'))
    .pipe(gulp.dest('./lib'));
  gulp
    .src('bower_components/**/*.css')
    .pipe($.concat('build.css'))
    .pipe($.cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('wiredep', function() {
  gulp.src('./src/_partials/_layout.jade')
    .pipe(wiredep())
    .pipe(gulp.dest('./src/_partials'));
})

gulp.task('jade:dev', function () {
  gulp
    // no _* (partials)
    .src(['src/**/*.jade'])
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe($.connect.reload());
});

gulp.task('jade:prod', function () {
  gulp
    // no _* (partials)
    .src(['src/**/*.jade', '!src/**/_*.jade'])
    .pipe($.jade())
    .pipe(gulp.dest('./'))
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
    .pipe(gulp.dest('./css'))
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
    .pipe(gulp.dest('./css'));
});

gulp.task('babel:dev', function () {
  gulp
    .src('src/js/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      sourceMaps: 'inline'
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./js'))
    .pipe($.connect.reload());
})

gulp.task('babel:prod', function () {
  gulp
    .src('src/js/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('./js'));
})

gulp.task('build:prod', function () {
  gulp.start(['jade:prod', 'sass:prod', 'babel:prod', 'bower']);
  //gulp.start(['jade:prod', 'sass:prod', 'babel:prod']);
});

gulp.task('build:dev', function () {
  gulp.start(['jade:dev', 'sass:dev', 'babel:dev', 'bower']);
  //gulp.start(['jade:prod', 'sass:prod', 'babel:prod']);
});

function randomPort() {
  return Math.floor(Math.random() * 65535);
}

var random_port = randomPort();
var livereload_port = randomPort();

gulp.task('connect', function() {
  $.connect.server({
    port: random_port,
    root: '.',
    livereload: {port: livereload_port}
  });
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.jade'], ['jade:dev'])
  gulp.watch(['src/**/*.scss'], ['sass:dev'])
  gulp.watch(['src/**/*.js'], ['babel:dev'])
});

gulp.task('open', function() {
  var options = {
    url: 'http://localhost:' + random_port,
    app: 'Google Chrome'
  };
  gulp.src('./index.html')
    .pipe($.open('', options));
});

//gulp.task('cleana', ['clean'], function() {
//  gulp.start('jade:prod');
//})

gulp.task('serve', ['connect', 'open']);
gulp.task('default', ['build:dev', 'connect', 'watch', 'open']);
