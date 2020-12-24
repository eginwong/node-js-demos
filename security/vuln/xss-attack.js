const http = require("http");

// good
http.get('http://localhost:3000/?token=wheee&lang=fr', (res) => {
  let out = "";
  res.on('data', (c) => out += c);
  res.on('end', () => {
    console.dir(out);
  });
}).on('error', console.error);

// evil
http.get('http://localhost:3000/?token=%22%3E%3Cscript%3Estat.innerHTML=%22Status:%20🤙🟢%22%3C&lang=script%3E%3Ca%20href=%22', (res) => {
  let out = "";
  res.on('data', (c) => out += c);
  res.on('end', () => {
    console.dir(out);
  });
}).on('error', console.error);