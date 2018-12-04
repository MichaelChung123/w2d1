var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var appendData;

  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');

    response.on('data', function(data) {
      appendData += data;
      console.log(appendData, '\n');
    });
  });

}

getAndPrintHTML();