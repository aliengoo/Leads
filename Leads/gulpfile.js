var gulp = require('gulp');

var os = require("os");

var lp = require('gulp-load-plugins')({
  lazy: true
});

var path = require("path");

var indexHtml = require("./gulp/gulp-build.index-html");
var args = require("./gulp/gulp-config.command-line-args");
var app = require("./gulp/gulp-build.app");
var vendor = require("./gulp/gulp-build.vendor");
var helper = require("./gulp/gulp-build.helper");
var format = require("util").format;

var publicPaths = require("./gulp/gulp-config.public-paths");

var client = require("./package.json").workflow.client;

gulp.task('default', ['index-html', 'app:styles', 'app', 'vendor'], function () {

  if (!args.production) {

    // testing
    if (args.test) {
      helper.log("Karma tests enabled");
    } else {
      helper.log("To run karma tests, use the --test argument");
    }

    // watch
    if (args.watchReloadEnabled) {

      lp.livereload.listen({
        start: true
      });

      var stylesGlob = [path.join(client.src.root, "**/*.scss")];
      var codeGlob = [
        path.join(client.src.js.root, "**/*.ts"),
        path.join(client.src.js.root, "**/*.jade")
      ];

      gulp.watch(codeGlob, ['app']);
      gulp.watch(stylesGlob, ['app:styles']);
      gulp.watch(client.src.index.templateFileUri, ["index-html"]);

      helper.log("Watching for changes, and ready to reload...");
      helper.log("READY PLAYER ONE...");
    } else {
      if (args.test) {
        helper.log("Not watching for your changes, but I am watching for test changes.  To enable watching and reloading, use the --watch argument");
      } else {
        helper.log("Not watching for your changes.  To enable watching and reloading, use the --watch argument");
      }
    }

  } else {
    helper.log("Running in production mode");
  }
});




