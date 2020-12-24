const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const upperCased = (req.query.content || "")
    .toUpperCase();
  res.end(`I upper-ed it: ${upperCased}`);
});

app.listen(process.env.PORT || "3000");
