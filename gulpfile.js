const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const browser = require('browser-sync');

function server() {
  return browser.init({
    server: {
      baseDir: './'
    }
  });
}

function sassTask() {
  return src('./styles/styles.scss')
         .pipe(sass())
         .pipe(dest('./styles'))
         .pipe(browser.stream());
}

function watchTask() {
  server();

  watch('./styles/styles.scss', sassTask);
  watch('./index.html', browser.reload());
  watch('./js/main.js', browser.reload());
}

exports.watch = watchTask;