const http = require('http');

http.get('http://localhost:3000/redirect-me', (res) => {
  let out = "";
  res.on('data', (c) => out += c);
  res.on('end', () => {
    console.dir(out);
  });
}).on('error', console.error);