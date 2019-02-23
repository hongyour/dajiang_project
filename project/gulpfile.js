var gulp = require("gulp");
// html
gulp.task("copy",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload())
})

// css
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var minify = require("gulp-minify-css");
gulp.task("sass",function(){
	return gulp.src("stylesheet/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	/*.pipe(minify())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))*/
	.pipe(connect.reload())
})

//js
var uglify = require("gulp-uglify");
gulp.task("scripts",function(){
	return gulp.src(["js/*.js","!js/index.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})

//index.js
gulp.task("scripts-index",function(){
	return gulp.src("js/index.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})

//images
gulp.task("images",function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload())
})

//data
gulp.task("data",function(){
	return gulp.src(["data/*.json", "!package.json", "!package-lock.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload())
})

//iconfont
gulp.task("font",function(){
	return gulp.src("iconfont/**.*")
	.pipe(gulp.dest("dist/iconfont"))
	.pipe(connect.reload())
})


gulp.task("build",["copy", "sass","scripts","scripts-index","data","images","font"]);


gulp.task("watch",function(){
	gulp.watch("*.html", ["copy"]);
	gulp.watch("images/**.*", ["images"]);
	gulp.watch(["js/*.js","!js/index.js"], ["scripts"]);
	gulp.watch(["data/*.json", "!package.json", "!package-lock.json"], ['data']);
	gulp.watch("stylesheet/*.scss", ["sass"]);
	gulp.watch("js/index.js", ['scripts-index']);
})

var connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:8080,
		livereload:true
	})
})

gulp.task("default",["watch","server"]);