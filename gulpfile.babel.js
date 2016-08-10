import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

const $ = plugins();

const PATHS = {
  APP: 'build',
  DIST: 'dist',
  SRC: 'src',
  ICON: 'icons',
  STYLES: 'style'
};

let onError = (err) => {
  $.util.beep();
  $.util.log(err.toString());
  if (err.stack) {
    $.util.log('Stack trace', err.stack.toString());
  }
};

const options = {
  react: {
    source: [PATHS.SRC+'/**/*.js'],
    target: PATHS.APP,
    config: {
      "presets": ["es2015", "react", "stage-0"],
      "plugins": ["add-module-exports"]
    }
  },
  html:{
  	source: [PATHS.SRC+'/*.html'],
    target: PATHS.APP,
  },
  sass: {
    source: [PATHS.STYLES+'/*.scss'],
    target: {
      path: PATHS.APP+'/style/',
      name: 'music.css'
    },
    config: {
      errLogToConsole: true
    }
  }
};

gulp.task('sass', () =>
  gulp.src(options.sass.source)
    .pipe($.cached('sass'))
    .pipe($.sass(options.sass.config).on('error', onError))
    .pipe($.concat(options.sass.target.name))
    .pipe(gulp.dest(options.sass.target.path))
    .pipe($.livereload())
);

gulp.task('watch', (cb) => {
  $.livereload.listen(8012);
  gulp.watch(options.sass.source, ['sass']);
  gulp.watch(options.react.source, ['react']);
  gulp.watch('package.json');
  gulp.watch('README.md');
  gulp.watch(options.html.source,['html']);
  cb();
});

gulp.task('html', () =>
  gulp.src(options.html.source)
    .pipe(gulp.dest(options.html.target))
    .pipe($.livereload())
);
gulp.task('react', () =>
  gulp.src(options.react.source)
    .pipe($.babel(options.react.config).on('error', onError))
    .pipe($.react().on('error', onError))
    .pipe(gulp.dest(options.react.target))
);

gulp.task('clean', () => {
  return require('del').sync([PATHS.APP, PATHS.DIST]);
});

gulp.task('build', (cb) => {
  return runSequence('clean', ['sass', 'react','html'], cb);
});

gulp.task('live', (cb) => {
  return runSequence('build','watch', cb);
});
