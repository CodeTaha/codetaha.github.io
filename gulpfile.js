var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy:true});

/**
 * gulp images
 * Optimizes Images for Production
 */
gulp.task('images', function() {
    log('Copying and compressing images to build');
    return gulp
        .src(["src/images/**/**.**", "src/images/**.**"])
        .pipe($.imagemin({optimizationsLevel: 4}))
        .pipe(gulp.dest('./images'));
});



// Helper Functions
function log(msg){
    if(typeof(msg) === 'object'){
        for(var item in msg) {
            if(msg.hasOwnProperty(item)){
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}