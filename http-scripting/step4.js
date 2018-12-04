var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  var appendData = '';
  var url = {
    host: options.host,
    path: options.path
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');

    response.on('data', function(data) {
      appendData += data;
      callback(appendData);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);