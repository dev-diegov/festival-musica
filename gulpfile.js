//automatizando tareas

const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){

    // identificar el archivo .SCSS a compilar.
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe( sass ()) //Compilarlo
        .pipe( dest('build/css') ) //Almacenar en disco duro

    done(); //finaliza la tarea/función
}

function dev(done){

    watch('src/scss/**/*.scss', css); //watch manda a cambiar la tarea de css (función de arriba) actualizando automaticamente los cambios de estilos
    done();
}

exports.css = css;
exports.dev = dev;