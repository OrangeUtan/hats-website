import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import imagemin from 'gulp-imagemin';
import buffer from 'vinyl-buffer';
import csso from 'gulp-csso';
import merge from 'merge-stream';

gulp.task('spritesheets', function () {
	var spriteData = gulp.src('static/i/icon/*.png').pipe(
		spritesmith({
			imgName: 'hatIcons.png',
			cssName: 'hatIcons.css',
			imgPath: '/i/hatIcons.png',
			cssTemplate: 'src/spritesheet.template.handlebars',
			cssHandlebarsHelpers: {
				percentage: function (value, total) {
					return value / total;
				}
			}
		})
	);

	// Pipe image stream through image optimizer and onto disk
	var imgStream = spriteData.img
		// DEV: We must buffer our stream into a Buffer for `imagemin`
		.pipe(buffer())
		.pipe(imagemin())
		.pipe(gulp.dest('static/i/'));

	// Pipe CSS stream through CSS optimizer and onto disk
	var cssStream = spriteData.css.pipe(csso()).pipe(gulp.dest('static/i/'));

	return merge(imgStream, cssStream);
});
