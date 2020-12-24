const http = require("http");

// http.get('http://localhost:3000/?content=hi', (res) => {
//   let out = "";
//   res.on('data', (c) => out += c);
//   res.on('end', () => {
//     console.dir(out);
//   });
// }).on('error', console.error);

const options = {
  method: "POST",
  port: 3000,
  headers: {
    "Content-Type": "application/json",
  },
};

const payload = JSON.stringify({
  data: {
    brand: "green",
    count: -1,
  },
});

const req = http.request(options, (res) => {
  let out = "";
  res.on("data", (c) => (out += c));
  res.on("end", () => {
    console.dir(out);
  });
});

req.write(payload);
req.end();
