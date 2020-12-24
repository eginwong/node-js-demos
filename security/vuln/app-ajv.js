const express = require("express");
const app = express();
app.use(express.json());
const Ajv = require("ajv").default
const ajv = new Ajv()
const schema = {
  type: "object",
  properties: {
    brand: { type: "string" },
    count: { type: "number", minimum: 0 }
  },
  required: ["brand"],
  additionalProperties: false
};
const validate = ajv.compile(schema);
const valid = validate(data)
if (!valid) console.error(validate.errors);

app.post("/", (req, res) => {
  const { data } = req.body;
  const valid = validate(data)
  if (!valid) console.error(validate.errors);
  res.end();
});

app.listen(process.env.PORT || "3000");
