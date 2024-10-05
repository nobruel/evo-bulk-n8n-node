const gulp = require('gulp');
const rename = require('gulp-rename');

// Tarefa para copiar ícones para a pasta dist
gulp.task('build:icons', function () {
    return gulp.src('assets/nodes/*.{png,jpg}')  // Copia todos os arquivos .png da pasta assets
        .pipe(rename({ dirname: '' })) // Remove diretórios ao copiar
        .pipe(gulp.dest('dist/nodes'));  // Coloca os ícones na pasta dist/assets
});
