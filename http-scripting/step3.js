var https = require('https');

function getAndPrintHTML (options) {

  var appendData = '';
  var url = {
    host: options.host,
    path: options.path
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');

    response.on('data', function(data) {
      appendData += data;
      console.log(appendData, '\n');
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML(requestOptions);