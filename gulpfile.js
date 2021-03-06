const gulp			= require("gulp");
const concat_json	= require("gulp-concat-json");


// ===========================================
// Combine quotes JSON files into one file
// ===========================================

// Pushes objects from quotes files into array in new file
gulp.task("merge", () => {
	return gulp.src("collection/**/*.json")
		.pipe(concat_json("lastWords.json"))
		.pipe(gulp.dest("./"));
});