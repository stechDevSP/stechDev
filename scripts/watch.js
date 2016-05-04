var argv     = require('minimist')(process.argv.slice(2));
var gaze = require('gaze');
var exec = require('child_process').exec;

gaze(argv._, function(err, watcher) {

    // Get all watched files
    var watched = this.watched();

    // On changed/added/deleted
    this.on('all', function(event, filepath) {
      var fileext = filepath.split('.').pop();
      var task = 'make ';
      console.log(filepath + ' was ' + event);
      exec(task + fileext, function(error, stdout, stderr) {
        console.log(stdout);
      });
    });

});
