var gulp = require('gulp');
// var concat = require('gulp-concat');
var replace = require('gulp-replace');
// var clean = require('gulp-clean');

var ejs = require("gulp-ejs")

var path={
    staticfiles:"./public/**/*"
}

// 拷贝静态文件夹
gulp.task("copy",function(){
    gulp.src(path.staticfiles)

    .pipe(gulp.dest('dist/static'))
})


gulp.task('ejs', function () {
    gulp.src('./views/templTohtml.ejs')
        .pipe(ejs({
            data:{
                title:"1111111",
                oldtitle:"222222",
                author:"jinshw",
                content:"<div style='width:100px;height:100px;background-color:red;'></div>"
            }
        }, {}, { ext: '.html' }))
        .pipe(replace(/__BASEURL__/g,'../static'))
        .pipe(gulp.dest("./dist/pages"));
});