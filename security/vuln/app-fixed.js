const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let { content } = req.query;
  if (Array.isArray(content)) 
    content = content.pop();

  // OR check Number.isSafeInteger()
  // OR check isNaN(parseInt(id, 10))
  const upperCased = (content || "")
    .toUpperCase();
  res.end(`I upper-ed it: ${upperCased}`);
});

app.listen(process.env.PORT || "3000");
