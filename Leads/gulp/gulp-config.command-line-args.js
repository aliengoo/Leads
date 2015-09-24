var args = require("yargs").argv;

var packageJson = require("../package.json");


module.exports = {
  // when watch is enabled and not in production, run livereload
  watchReloadEnabled: !!args.watch && !(!!args.production),

  production: !!args.production,

  verbose: !!args.verbose

};