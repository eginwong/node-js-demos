const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const status = "🤚🛑DANGER🤚🛑";
  const { token, lang = "en" } = req.query;
  res.send(`
    <h1>RESULTS</h1>
    <h3 id="stat">Status: ${status}</h3>
    <a href="${token}/${lang}">Reports</a>`
  );
});

app.listen(process.env.PORT || "3000");
