const express = require("express");
const app = express();
const he = require('he');

app.get("/", (req, res) => {
  const status = "🤚🛑DANGER🤚🛑";
  const { token, lang = "en" } = req.query;
  const encoded = he.encode(`${token}/${lang}`);
  // encode attributes, escape html
  res.send(`
    <h1>RESULTS</h1>
    <h3 id="stat">Status: ${he.escape(status)}</h3>
    <a href="${encoded}">Reports</a>`
  );
});

app.listen(process.env.PORT || "3000");
