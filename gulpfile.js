const gulp = require('gulp');
const rename = require('gulp-rename');

// Tarefa para copiar ícones para a pasta dist
gulp.task('build:icons', function () {
    return gulp.src('assets/*.png')  // Copia todos os arquivos .png da pasta assets
        .pipe(rename({ dirname: '' })) // Remove diretórios ao copiar
        .pipe(gulp.dest('dist/assets'));  // Coloca os ícones na pasta dist/assets
});
