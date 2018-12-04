var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */

  var appendData = '';
  var url = {
    host: options.host,
    path: options.path
  };

  https.get(options, function(response) {
    response.setEncoding('utf-8');

    response.on('data', function(data) {
      appendData += data;
      callback(appendData);
    });
  });

}