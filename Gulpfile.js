var gulp = require('gulp')
var browserify = require('browserify')
var babel = require('babelify')
var vsource = require('vinyl-source-stream')
var vbuffer = require('vinyl-buffer')
var maps = require('gulp-sourcemaps')
var vueify = require('vueify')
var gvueify = require('gulp-vueify')
var uglify = require('gulp-uglify')
var pug = require('gulp-pug')
var stylus = require('gulp-stylus')
var pump = require('pump')

var compileJS = () => {
    var bundle = browserify('./src/js/index.js', { debug: true })
        .transform(babel)
        .transform(vueify);

        pump([
            bundle.bundle(),
            vsource('index.js'),
            vbuffer(),         
            maps.init({ loadMaps: true }),
            maps.write('./'),
            gulp.dest('./public/js')
        ]);   
}
var compileVue = () => gulp.src('./src/views/*.vue').pipe(gvueify()).pipe(gulp.dest('./public/js'));
var compileDOM = () => gulp.src('./src/views/*.pug').pipe(pug()).pipe(gulp.dest('./public/views'));
var compileCSS = () => gulp.src('./src/stylus/*.styl').pipe(maps.init()).pipe(stylus({ compress: true })).pipe(maps.write('./')).pipe(gulp.dest('./public/css'));

gulp.task('build:Vue', () => compileVue());
gulp.task('build:JS', () => compileJS());
gulp.task('build:DOM', () => compileDOM());
gulp.task('build:CSS', () => compileCSS());

gulp.task('default', ['build:Vue','build:JS', 'build:DOM', 'build:CSS']);