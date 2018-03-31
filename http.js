const http = require('http');

http.createServer((req, res) => {
  let cache = [];
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write(JSON.stringify(req, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
          return;
      }
      cache.push(value);
    }
    return value;
  }, '\t'));
  res.end('<p>Hello world!</p>');
}).listen(3000);
console.log('success');