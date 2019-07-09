// Adiciona os módulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

// Função para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp.src('animacao-1/css/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('animacao-1/css/'))
    .pipe(browserSync.stream());
}

// Tarefa de gulp para função de SASS
gulp.task('sass', compilaSass);


// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "animacao-1/"
    },
  });
}

// Tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);


// Função de watch do gulp
function watch() {
  gulp.watch(['animacao-1/css/scss/**/*.scss'], compilaSass);
  gulp.watch(['animacao-1/js/modules/**/*.js'], browserSync.reload);
  gulp.watch(['animacao-1/index.html']).on('change', browserSync.reload);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass'));