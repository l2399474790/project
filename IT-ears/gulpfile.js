var gulp = require("gulp"),
//minify = require("gulp-minify-css"),
    sass = require('gulp-sass'),//编译sass文件
    //去掉css注释
    stripCssComments = require('gulp-strip-css-comments'),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    imageminOptipng = require('imagemin-optipng'),
    imageminSvgo = require('imagemin-svgo'),
    imageminGifsicle = require('imagemin-gifsicle'),
    imageminJpegtran = require('imagemin-jpegtran'),
    cache = require("gulp-cache"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    order = require("gulp-order"),
    connect = require("gulp-connect");

//公共路径配置
//var config = {
//    htmlFile: "./*.html",
//    //htmlPath: "./dist",
//    cssFile: "./src/css/**/*",
//    cssPath: "./css",
//    imageFile: "./src/images/**/*.{png,jpg}",
//    imgPath: "./images",
//    jsFile: "./src/js/**/*.js",
//    jsPath: "./js",
//    dataFile: "./src/testData/*.json",
//    dataPath: "./testDate"
//};

// 监控并自动刷新页面
gulp.task('connect', function () {
    connect.server({
        root: '../huodong',
        port: 1111,
        livereload: true
    });
});

//// 监控页面
//gulp.task("html", function () {
//    return gulp.src(config.htmlFile)
//        .pipe(connect.reload());
//});
//
////压缩css
//gulp.task("sass", function () {
//    return gulp.src(config.cssFile)
//        .pipe(sass({
//            outputStyle: 'expanded'
//        }).on('error', sass.logError))
//        .pipe(gulp.dest(config.cssPath))
//        .pipe(connect.reload());
//});
//
////打包压缩js
//gulp.task("uglify", function () {
//    return gulp.src(config.jsFile)
//        .pipe(uglify({
//            compress: true,
//            preserveComments: 'false'
//        }))
//        .pipe(gulp.dest(config.jsPath))
//        .pipe(connect.reload());
//});
////压缩 图片
//gulp.task("imagemin", function () {
//    return gulp.src(config.imageFile)
//        .pipe(cache(imagemin({
//            progressive: true,
//            use: [
//                pngquant(),
//                imageminJpegtran({progressive: true}),
//                imageminGifsicle({interlaced: true}),
//                imageminOptipng({optimizationLevel: 3}),
//                imageminSvgo()
//            ]
//        })))
//        .pipe(gulp.dest(config.imgPath))
//        .pipe(connect.reload());
//});
////模拟数据
//gulp.task("data", function () {
//    return gulp.src(config.dataFile)
//        .pipe(gulp.dest(config.dataPath))
//        .pipe(connect.reload());
//});
//默认任务
gulp.task("default", function () {
    gulp.start("connect");
    //gulp.start("connect", "html", "sass", "uglify", "imagemin", "data");
    //gulp.watch([config.htmlFile], ["html"]);
    //gulp.watch([config.cssFile], ["sass"]);
    //gulp.watch([config.jsFile], ["uglify"]);
    //gulp.watch([config.imageFile], ["imagemin"]);
    //gulp.watch([config.dataFile], ["data"]);
});